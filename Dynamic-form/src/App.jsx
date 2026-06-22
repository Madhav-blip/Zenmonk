import './App.css'
import {Form} from './Forms.jsx'

function App() {
const fruits=["Apple","Mango","Banana"]

const users=[
  {id:1,name:"Madhav"},
  {id:2,name:"Kriti"}
]

const age=19
  return (
    <div>
    <div>
      {fruits.map((fruit) => (
        <p>{fruit}</p>
      ))}
    </div>
    {users.map((user) => (
      <h2>{user.id}: {user.name}</h2>
      // <h2>key={user.id}</h2>  --> use this because react wont get confused here while rendering
    ))}


    {/* Conditional rendering 
    1. Either use if else statement
    2. isloggedin ? <Welcome /> : <Login />
    3. (imp) isAdmin && <button>Delete User</button>
    meaning if admin true then show button of del user
    
    */}
{age >= 18 ? <h1>Adult</h1> : <h1>Minor</h1>}


<Form/>
    </div>
  )
}

export default App
