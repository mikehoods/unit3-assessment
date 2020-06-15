import React, { Component, useImperativeHandle, useEffect } from "react";
import "./style.css";



const App = (props) => {
  const [intReversed, setIntReversed] = React.useState(null)
  const [formData, setformData] = React.useState({
    int: ""
  })

  
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

  const handleReverse = (event) => {
    setformData({...formData, [event.target.name]: event.target.value})
    const result = formData.int
    setIntReversed(result)
  } 
    return (
      <>
      <div className="App">Unit 3 Assessment App</div>
      <form>
        Integer: <input type="number" name="int"/>
        <input type="submit" onClick={handleReverse}></input>
      </form>
      <h2>The Reverse is: {formData.int}</h2>
      </>
    )
}

export default App