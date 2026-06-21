import React from "react"
import  {Head} from "./Heading.jsx"
import {Profile} from "./ProfileCard.jsx"
import {Counter} from "./Counter.jsx"
function App() {

  return (
    <>
    <Head name='Madhav' />
    <div className="Container">
    <Profile name='Kirti' age='19' gender='female' company='Google' />
    <Profile name='Aachman' age='20' role='admin' gender='female' company='Apple' />
    <Profile name='Rohit' age='25' role='Designer' gender='male' company='Microsoft' />
    <Profile name='Zack' age='28' role='Coder' gender='male' company='Flipkart' />
    <Profile name='Zoe' age='45' role='DEVOPS' gender='female' company='Apple' />
    </div>
    <Counter />
    </>
  )
}

export default App
// React is a library and not a framework.