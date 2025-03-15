import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now());
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = targetDate.getTime() - Date.now();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft <= 0) {
        setIsExpired(true);
        clearInterval(timer);  // Stop the countdown when it reaches 0
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, [targetDate]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24)); // Calculate days
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24); // Calculate hours
    const minutes = Math.floor((time / (1000 * 60)) % 60); // Calculate minutes
    const seconds = Math.floor((time / 1000) % 60); // Calculate seconds
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div>
      {isExpired ? (
        <p>Event Started!</p>
      ) : (
        <p>
          {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
