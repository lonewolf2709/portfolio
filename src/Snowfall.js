import React, { useState, useEffect } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Snowfall.css';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakesCount = 70;
    const newSnowflakes = [];

    for (let i = 0; i < flakesCount; i++) {
      newSnowflakes.push({
        left: Math.random() * window.innerWidth,
        animationDuration: Math.random() * 8 + 4,
        size: Math.random() * 1.5 , // Decreased the size range
      });
    }

    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((flake, index) => (
        <AcUnitIcon
          key={index}
          className="snowfall"
          style={{
            left: flake.left + 'px',
            animationDuration: flake.animationDuration + 's',
            fontSize: flake.size + 'rem',
            color: 'aliceblue', // Set the color to white or the desired color
            background: 'transparent', // Set the background to transparent
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
