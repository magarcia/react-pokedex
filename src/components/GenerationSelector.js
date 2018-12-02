import React from 'react';
import {Link} from 'react-router-dom';

const GenerationSelector = ({currentGeneration}) => {
  const isActive = id => (currentGeneration === id && 'is-active') || '';
  return (
    <div className="tabs">
      <ul>
        <li className={isActive('all')}>
          <Link to={'/generation/all'}>All</Link>
        </li>
        <li className={isActive('1')}>
          <Link to={'/generation/1'}>First generation</Link>
        </li>
        <li className={isActive('2')}>
          <Link to={'/generation/2'}>Second geneneration</Link>
        </li>
        <li className={isActive('3')}>
          <Link to={'/generation/3'}>Third generation</Link>
        </li>
        <li className={isActive('4')}>
          <Link to={'/generation/4'}>Fourth generation</Link>
        </li>
      </ul>
    </div>
  );
};

export default GenerationSelector;
