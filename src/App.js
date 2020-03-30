import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increment, decrement, signIn} from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLoggedin = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello Lainok Blockchain</h1>
      <button onClick={() => dispatch(increment(5))} >increment</button>
      <button onClick={() => dispatch(decrement())} >Decrement</button>
      <button onClick={() => dispatch(signIn())} >Log In</button>
      {isLoggedin ? <h1>you are isLogged you'r counter is {counter}</h1> : <h1>you are not supposed to be here </h1>}
    </div>
  );
}

export default App;
