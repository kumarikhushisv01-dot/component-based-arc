import React from 'react'
import Button from './component/Button'


const App = () => {
  return (
    <>
    <h1>Discution on component</h1>
    <Button buttonText={"click me"} subText={"Welcome"}/>
    <br/>
    <Button buttonText={"Add t cart"}subText={"lets Go"}/>
    <br/>
    <Button buttonText={"Buy Now"}subText={"this is for you"}/>
    <br/>
    <Button buttonText={"My Wishlist"} />
    
    </>
  )
}

export default App