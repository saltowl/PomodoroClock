export const INITIAL_STATE = {
  clock: {
    start: false,
    phase: 'session',
    sessionLength: 25,
    breakLength: 5,
    timeLeft: 1500,
  },
};

export const TOGGLE_START = 'TOGGLE_START';
export const START_TIMER = 'START_TIMER';
export const CHANGE_BREAK = 'CHANGE_BREAK';
export const CHANGE_SESSION = 'CHANGE_SESSION';
export const CHANGE_TIME_LEFT = 'CHANGE_TIME_LEFT';
export const CHANGE_PHASE = 'CHANGE_PHASE';
export const RESET = 'RESET';
