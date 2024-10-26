import React from 'react';

const Navigation = ({ onMenuClick }) => {
  return (
    <nav className="navigation">
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="#!" onClick={() => onMenuClick('exercises')}>Exercises</a>
        </li>
        <li>
          <a href="#!" onClick={() => onMenuClick('meals')}>Meals</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;