import {createContext, ReactNode, useContext, useReducer} from "react";

type Timer = {
  name: string;
  duration: number;
}
type TimerState = {
  isRunning: boolean;
  timers: Timer[]
}

const initialState: TimerState = {
  isRunning: true,
  timers: []
}
type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void,
  startTimers: () => void,
  stopTimers: () => void
}
type TimersContextProviderProps = {
  children: ReactNode
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) {
    throw new Error('Timers Context is null');
  }
  return timersCtx;
}

type StartTimersAction = {
  type: 'START_TIMERS'
}
type StopTimersAction = {
  type: 'STOP_TIMERS'
}
type AddTimerAction = {
  type: 'ADD_TIMER',
  payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimerState, action: Action): TimerState {
  if (action.type === 'START_TIMERS') {
    return {
      ...state,
      isRunning: true
    }
  }
  if (action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false
    }
  }
  if (action.type === 'STOP_TIMERS') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration
        }
      ]
    }
  }

  return state;
}

export default function TimersContextProvider({children}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState)
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({type: 'ADD_TIMER', payload: timerData})
    },
    startTimers(){
      dispatch({type: 'START_TIMERS'})
    },
    stopTimers(){
      dispatch({type: 'STOP_TIMERS'})
    }
  };
  return <TimersContext.Provider value={ctx}>
    {children}
  </TimersContext.Provider>
}