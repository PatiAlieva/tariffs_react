import React from 'react';
import style from './style.module.scss';
import CSSModules from 'react-css-modules';

import './themes/blue.scss';
import './themes/green.scss';
import './themes/red.scss';
import './themes/black.scss';

function getTheme(color) {
    switch (color) {
        case 'blue':
            return 'blue-card';
        case 'green':
            return 'green-card';
        case 'red':
            return 'red-card';
        case 'black':
            return 'black-card';
        default:
            return '';
    }
}

export default function Card(props) {
  const theme = getTheme(color);
  let classCard ="";
  if (isSelected) classCard = "selected";
  return (
    <div className={`tariff &{theme} &{classCard}`}>
      <div className="name">{props.name}</div>
      <div className="price">{props.price}</div>
      <div className="speed">{props.speed}</div>
      <div className="limit">{props.limit}</div>
    </div>
  )
}
