import { useState, useEffect } from 'react';
import People from "../src/components/People";

function App() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

//   const updateInput = async (input) => {
//     if (people.students) {
//       const filtered = people.students.filter(student => {
//         input = document.getElementById("textareaID").value;
//         console.log("input", document.getElementById("textareaID").value, student.firstName);
//         console.log(student.firstName.toLowerCase().includes(input.toLowerCase()));
//         return student.firstName.toLowerCase().includes(input.toLowerCase());
//        })
//       setInput(input);
//       setPeople(filtered);
//     }
//  }

  return (
    <div className="container">
        {/* <textarea placeholder="Search for a name..." className="text" id="textareaID" required minlength="1" onChange={event => {setSearchTerm(event.target.value)} }></textarea> */}
        <People people={people}/>
    </div>
  );
}

export default App;
