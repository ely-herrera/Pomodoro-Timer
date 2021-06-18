import React from 'react';

function TimeTracker({
  session,
  focusDuration,
  secondsToDuration,
  minutesToDuration,
  breakDuration,
  isTimerRunning,
}) {
  return (
    session !== null && (
      <>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for{' '}
              {session?.label === 'Focusing'
                ? minutesToDuration(focusDuration)
                : minutesToDuration(breakDuration)}{' '}
              minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
            {!isTimerRunning && <h2>PAUSED</h2>}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: '20px' }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax={focusDuration}
                aria-valuenow={
                  100 -
                  (session?.timeRemaining /
                    ((session?.label === 'Focusing'
                      ? focusDuration
                      : breakDuration) *
                      60)) *
                    100
                }
                style={{
                  width: `${
                    100 -
                    (session?.timeRemaining /
                      ((session?.label === 'Focusing'
                        ? focusDuration
                        : breakDuration) *
                        60)) *
                      100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default TimeTracker;
