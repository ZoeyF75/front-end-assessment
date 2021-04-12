import { Article} from "./Article";
import { useState } from 'react';

//People is the plural, maps through list of students and makes article for each one
const People = ({ people }) => { 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTag, setSearchTag] = useState('');
  
  console.log(people);
  // //will run if type in search tag or search term
  // if (people.students) people.students.forEach(student => {
  //   //adds tag to student data, need to update data
  //   let tagID;
  //   let tagContent;
  //   document.querySelectorAll("article").forEach(article => {
  //     document.querySelectorAll("p").forEach(p => {
  //       tagContent = p.textContent
  //     })
  //     if (article.textContent.includes(student.firstName)) {
  //       tagID = student.id; //returns id of where tag is entered
  //       if (student.id = tagID) {
  //         student.tag = tagContent;
  //       }
  //     }
  // })
  // // console.log(student);
  // })

  return (
    <>
      <textarea placeholder="Search by name" className="text" id="textareaID" required minLength="1" onChange={event => {setSearchTerm(event.target.value)} }></textarea>
      <textarea placeholder="Search by tag" className="text" id="textareaID" required minLength="1" onChange={event => {setSearchTag(event.target.value)}}></textarea>

      <div>
        {!people.students ? 
          <div>loading...</div> 
        :
        people.students.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || val.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ) {
            return val;
          } else if(document.querySelectorAll("p").forEach(p => console.log(p))) {
            console.log("tagfound")
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