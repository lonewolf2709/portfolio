import React, { useState, useEffect } from 'react';
import './Snowfall.css';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakesCount = 70;
    const newSnowflakes = [];

    for (let i = 0; i < flakesCount; i++) {
      newSnowflakes.push({
        left: Math.random() * window.innerWidth,
        animationDuration: Math.random() * 8 + 4, // Decreased dropping speed
        size: Math.random() * 8 + 2, // Adjusted flake size
      });
    }

    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((flake, index) => (
        <div
          key={index}
          className="snowfall"
          style={{
            left: flake.left + 'px',
            animationDuration: flake.animationDuration + 's',
            width: flake.size + 'px',
            height: flake.size + 'px',
          }}
        ></div>
      ))}
    </div>
  );
};

export default Snowfall;