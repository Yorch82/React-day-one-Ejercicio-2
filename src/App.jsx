import './App.css';
import Person from "./components/Person/Person";
const person1 = { name: 'Yorch', surname: 'Developer', age: 39 };
const person2 = { name: 'Sheldon', surname: 'Cooper', age: 43 };
const person3 = { name: 'S4vitar', surname: 'Hacker', age: 30 };

function App() {
  
  return (
    <div className="App">
      <Person persons={person1}/>
      <br />
      <Person persons={person2}/>
      <br />
      <Person persons={person3}/>      
    </div>
  );
}

export default App;
