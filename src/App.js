import { useState, useEffect } from 'react';
import People from "../src/components/People";

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

  return (
    <div className="container">
        <People people={people}/>
    </div>
  );
}

export default App;
