import React, { useState, useEffect } from 'react';
import { ClockContainer } from './styles';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ClockContainer>
      {time.toLocaleTimeString('en-IN')}
    </ClockContainer>
  );
};

export default Clock;
