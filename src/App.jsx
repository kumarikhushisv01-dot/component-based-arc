import React from 'react'
import Button from './component/Button'
import Timer from './component/Timer'


const App = () => {
  return (
    <>
    <h1>Discution on component</h1>
    <Button buttonText={"click me"} subText={"Welcome"}/>
    <Timer/>
    <br/>
    <Button buttonText={"Add t cart"}subText={"lets Go"}/>
    <Timer/>
    <br/>
    <Button buttonText={"Buy Now"}subText={"this is for you"}/>
    <Timer/>
    <br/>
    <Button buttonText={"My Wishlist"} />
    <Timer/>
    </>
  )
}

export default App