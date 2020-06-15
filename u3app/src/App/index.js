import React, { Component, useImperativeHandle, useEffect } from "react";
import "./style.css";



const App = (props) => {
  const [intReversed, setIntReversed] = React.useState(0)

  
  const reverseInt = (int) => {
    if(Math.sign(int) === 1) {
        intReversed = parseInt(int.toString().split('').reverse().join(""))
    return intReversed
    } else if (Math.sign(int) === 0) {
        intReversed = 0
        return intReversed
    } else if (Math.sign(int) === -1) {
        intReversed = parseInt(int.toString().split('-').join("").split("").reverse().join(""))
        return -intReversed
    }
  }

  const handleReverse = (int) => {
    const result = reverseInt(56)
    setIntReversed(result)
  } 
    return (
      <>
      <div className="App">Hello World</div>
      <form>
        Integer: <input type="number" name="int"/>
        <input type="submit" onClick={handleReverse}></input>
      </form>
      <h2>The Reverse is: {intReversed}</h2>
      </>
    )
}

export default App