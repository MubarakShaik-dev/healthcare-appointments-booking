import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ToggleButton } from './styles';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? '☀️ Light' : '🌙 Dark'}
    </ToggleButton>
  );
};

export default ThemeToggle;
