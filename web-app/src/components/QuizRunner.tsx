import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import type { Question } from '../lib/types';

interface QuizRunnerProps {
  questions: Question[];
  onComplete: (answers: Record<string, string>) => void;
}

export default function QuizRunner({ questions, onComplete }: QuizRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isCorrect = submitted && selectedAnswer === question.answer;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  function handleCheck() {
    setAnswers((prev) => ({ ...prev, [question.id]: selectedAnswer }));
    setSubmitted(true);
  }

  function handleNext() {
    if (isLast) {
      onComplete({ ...answers });
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer('');
      setSubmitted(false);
    }
  }

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          Question {currentIndex + 1} of {questions.length}
        </Typography>
        <LinearProgress variant="determinate" value={progress} color="info" />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        {question.prompt}
      </Typography>

      <FormControl component="fieldset" sx={{ width: '100%' }}>
        <RadioGroup
          value={selectedAnswer}
          onChange={(e) => {
            if (!submitted) setSelectedAnswer(e.target.value);
          }}
        >
          {Object.entries(question.choices).map(([key, value]) => (
            <FormControlLabel
              key={key}
              value={key}
              control={<Radio disabled={submitted} />}
              label={`${key}. ${value}`}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {submitted && (
        <>
          <Alert severity={isCorrect ? 'success' : 'error'} sx={{ mt: 2 }}>
            {isCorrect
              ? 'Correct!'
              : `Incorrect — correct answer: ${question.answer}. ${question.choices[question.answer]}`}
          </Alert>
          <Typography variant="body2" sx={{ mt: 1.5, fontStyle: 'italic' }}>
            {question.explanation}
          </Typography>
        </>
      )}

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        {!submitted ? (
          <Button variant="contained" disabled={!selectedAnswer} onClick={handleCheck}>
            Check Answer
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext}>
            {isLast ? 'Finish' : 'Next'}
          </Button>
        )}
      </Box>
    </Box>
  );
}
