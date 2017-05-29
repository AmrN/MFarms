import React from 'react';
import HorizontalIconsList from '../HorizontalIconsList/HorizontalIconsList';

const icons = [
  {
    url: '/static/containers/reduce-risk.png',
    text: 'Reduce Risk',
  },
  {
    url: '/static/containers/increase-income.png',
    text: 'Increase your income',
  },
  {
    url: '/static/containers/save-water-and-land.png',
    text: 'Increase land and water productivity',
  },
  {
    url: '/static/containers/over-the-year.png',
    text: 'Grow all-year',
  },
  {
    url: '/static/containers/anywhere.png',
    text: 'Grow anywhere',
  },
  {
    url: '/static/containers/reduce-carbon-print.png',
    text: 'Reduce your carbon footprint',
  },
];
const LeafyGreenMachine = () => {
  return (
    <div className="LeafyGreenMachine">
      <h2>The Leafy Green Machine<sup>TM</sup> will help you:</h2>

      <HorizontalIconsList 
      icons={icons}  />
    </div>
  );
};

export default LeafyGreenMachine;