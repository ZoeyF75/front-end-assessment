import Article from "./Article";
import Student from "./Student";

const People = ({ people }) => {  
  return (
    <>
      <div>
        {!people.students ? 
          <div>loading...</div> 
        :
        people.students.map((student, index) => (
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


// students.map(function(student, index) {
//   console.log(student);
// })
{/* <Article
          firstname={people.students[0].firstName}
          lastname={people.students[0].lastName}
          email={people.students[0].email}
          company={people.students[0].company}
          skill={people.students[0].skill}
          average={calculateAvg(people.students[0].grades)}
          pic={people.students[0].pic}
          /> */}

          // people.students.forEach(element => {
          //   console.log(element.firstName);
          //   <Article
          //   firstname={element.firstName}
          //   lastname={element.lastName}
          //   email={element.email}
          //   company={element.company}
          //   skill={element.skill}
          //   average={calculateAvg(element.grades)}
          //   />
          // })