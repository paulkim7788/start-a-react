import React from 'react';
import './App.css';
//import Potato from './Potato';
function Food({ name, picture } ){  
  return (
    <div>
      <h1>I'm {name}!!</h1>
      <img src={picture} />
    </div>
    
  )
}

const foodILike = [
  { 
    id:1,
    name :'dal',
    image : 'https://cdn.thedailypost.kr/news/photo/202210/89609_86381_4537.png',
  },
  { 
    id:2,
    name :'mark',
    image : 'https://cdn.thedailypost.kr/news/photo/202210/89609_86381_4537.png',
  },
  { 
    id:3,
    name :'lynn',
    image : 'https://cdn.thedailypost.kr/news/photo/202210/89609_86381_4537.png',
  },
  { 
    id:4,
    name :'Japan',
    image : 'https://cdn.thedailypost.kr/news/photo/202210/89609_86381_4537.png',
  },
 
];

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}



function App() {
  return (
    <div>
      <h1>HELLO</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
