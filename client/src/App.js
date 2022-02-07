import './App.css';
//import DogForm from './DogForm';
import Dogs from './Dogs';
import { Route, Switch} from 'react-router-dom';
import {useState, useEffect } from "react";
import Login from "./Login"
import About from "./About"

function App() {
  const [user, setUser] = useState("")

  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout(){
    fetch("/logout", {method: "DELETE"}).then(r => {
      setUser(null)
    })
  }

  if (!user) return <Login setUser ={setUser} /> //this loads first and it wont show anything else in return
  return (
    <>
    <main>
     <Switch>
          <Route exact path ="/">
            <Dogs user={user}/>
          
            <button onClick={handleLogout}> Logout </button>
          </Route>

        <Route exact path="/about">
         <About/>
        </Route>

      </Switch>
    </main>
    
    </>
    
   
  );
}

export default App;

/*

<div className="App">
      <header className="App-header"> 
      <Dogs/>
      <DogForm/>
      </header>
    </div>


     <>
    <main>
     <Switch>
          <Route path = "/new">
            <DogFrom/>
          </Route>

        <Route path="/">
         <Dogs/>
        </Route>

      </Switch>
    </main>
    
    </>
*/