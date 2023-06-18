import React from 'react';
//import Potato from './Potato'; 강의에서는 하나의 component만 render가 가능했으나, 최신 버전은 여러 개도 가능
import PropTypes from "prop-types";

function Food( {fav, price, rating} ) { //(4-1)App Component에서 Food Component으로 정보를 보내는 법
  //가. props object(모듈화)에서 fav 바로 가져오기, 나. props 이후 props.fav로 가져오기
  return (
    <div>
      <h2>I like {fav}</h2>
      <h3>The price is {price} won</h3>
      <h4>My rate is {rating}</h4>
    </div>
  ); //(4-2)정보를 가져올 뿐 아니라, 실제로 적용까지!
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired //type과 required 여부 설정 가능 등등...
}

const foodILike = [
  {
    id: 1, //(5-2)react의 모든 element는 unique해야 함(list에 들어가면 uniqueX)
    name: "Kimchi",
    price: 10000,
    rating: "good"
  },
  {
    id: 2,
    name: "cupramen",
    price: 5000,
    rating: "soso"
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {/*<Potato />*/}
      {/*<Food 
        fav="kimchi"  //prop(erty) fav의 value인 kimchi
        something={true}
        papapa={["hello", 1, 2, 3, 4, true]} 
      />
      <Food
        fav="cupramen"
      />*/}
      {foodILike.map(current => (
        <Food key= {current.id} fav={current.name} price={current.price} rating={current.rating}/>
      ))}
    </div> 
    //(5-1)Dynamic Component Generation
    //map은 array로 결과값을 반환함.
    //current 역시 object이므로 name을 따로 가져올 수 있음
  );
}

export default App;
