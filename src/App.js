import { useState, useEffect } from 'react';
import People from "../src/components/People";
import Article from './components/Article';
import FetchApi from './components/FetchApi';

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const peopleFromServer = await fetchPeople();
      setPeople(peopleFromServer);
    }
    getPeople();
  }, []);

  const fetchPeople = async () => {
    const res = await fetch('https://api.hatchways.io/assessment/students');
    const data = await res.json();
    return data
  }

  // const fetchPerson = async (id) => {
  //   const res = await fetch(`https://api.hatchways.io/assessment/students/${id}`)
  //   const data = await res.json;
  //   return data;
  // }

  // const firstname = people[0].firstName;
  // const lastname = people[0].lastName;
  // const email = people[0].email;
  // const company  = people[0].company;
  // const skill = people[0].skill;
  // const average = people[0].grades;
  
  return (
    <div className="App">
      <header className="container">
        <People people={people}/>
              
        {/* <Article 
          firstname={firstname}
          lastname={lastname}
          email={email}
          company={company}
          skill={skill}
          average={average}
         /> */}
      </header>
    </div>
  );
}

export default App;
