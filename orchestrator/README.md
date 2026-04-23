# Orchestrator

ASDLC-compatible automation for the PPL Study project.

## pick-ticket.sh

Selects the highest-priority open `dev`-labeled issue whose dependencies are
all satisfied (referenced issues **CLOSED** and their PRs **MERGED** into main).

```
Usage: ./orchestrator/pick-ticket.sh [--repo OWNER/REPO]

Outputs: issue number on stdout, skip reasons on stderr.
Exit 0 with output  → issue selected.
Exit 0 no output    → no open dev tickets.
Exit 1              → all tickets deferred (all have unmet deps).
```

### Dependency format (in issue body)

```markdown
## Dependencies
#12, #34

## Dependencies
Blocked by #99

## Dependencies
Dependencies: none
```

Any of the above are understood. `Dependencies: none` (with or without `##`
heading) short-circuits parsing. `Blocked by #NNN` is treated as an alias for
`#NNN`.

### Running tests

```
bash orchestrator/pick-ticket.test.sh
```

### Wiring into the ASDLC cycle

The scheduler is invoked by the ASDLC automation before it hands off a ticket
number to the Claude Code worker. If it exits 1 the cycle stops for this run.
