import Article from "./Article";
import { useState } from 'react';

//People is the plural, maps through list of students and makes article for each one
const People = ({ people }) => { 
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <textarea placeholder="Search for a name..." className="text" id="textareaID" required minLength="1" onChange={event => {setSearchTerm(event.target.value)} }></textarea>
      <div>
        {!people.students ? 
          <div>loading...</div> 
        :
        people.students.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ) {
            return val;
          }
        }).map((student, index) => (
          <Article 
            key={index} 
            student={student} 
          />
        ))
       
        }
      </div>
    </>
  )
}

export default People;