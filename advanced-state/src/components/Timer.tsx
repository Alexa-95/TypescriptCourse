import Container from './UI/Container.tsx';
import { type Timer as TimerProps, useTimersContext } from '../store/timers-context.tsx';
import { useEffect, useState } from 'react';

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const { isRunning } = useTimersContext();

  useEffect(() => {
    setRemainingTime(duration * 1000);
  }, [duration]);

  useEffect(() => {
    if (!isRunning || remainingTime <= 0) return;

    const id = window.setInterval(() => {
      setRemainingTime(prev => Math.max(prev - 50, 0));
    }, 50);

    return () => clearInterval(id);
  }, [isRunning, remainingTime]);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
