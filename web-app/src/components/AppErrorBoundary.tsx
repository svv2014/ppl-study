import { Component, type ErrorInfo, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[AppErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          id="main-content"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            px: 3,
            textAlign: 'center',
            gap: 2,
          }}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: 700 }}>
            Something went wrong
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400 }}>
            An unexpected error occurred. Your study progress is safe — use the button below to return to the home screen.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/"
            sx={{ mt: 1, borderRadius: 1 }}
          >
            Back to Home
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}
