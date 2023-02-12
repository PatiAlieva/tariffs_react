import './style/App.scss';
import React from 'react';
import data from './data.json';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className={style.App}>
      {data.map((card) => 
        <Cards 
          name={card.name} 
          price={card.price} 
          speed={card.speed} 
          limit={card.limit} 
          color={card.color}
          isSelected={card.isSelected}/>
      )}
    </div>
  );
}

export default App;
