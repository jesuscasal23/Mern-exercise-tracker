import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";
import EditExercise from "./components/editExercise";
import ExercisesList from "./components/exercisesList";

function App() {
  //
  //const apiCall()

  // const [state, setState] = useState()

  //useEffect(() => {
  //  const is = {subscribed: true}

  //  apiCall().then(res => if(is.subscribed) setState(res))
  //  return () => {
  //    return is.subscribed = false
  //  }
  //}, [])

  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
