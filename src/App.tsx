import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from './reducers/index'
import {increment} from './actions/index';
import {decrement} from './actions/index';

const App = () => {
  const counter = useSelector((state: RootState) => state.counter)
  const isLogged = useSelector((state: RootState) => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1> Counter {counter} </h1>

      {isLogged ? <h3>Secret information!</h3> : ''}
      <button
        onClick={() => dispatch(increment(5))}  
      >+</button>
      <button
        onClick={() => dispatch(decrement())} 
      >-</button>
    </div>
  );
}

export default App;
