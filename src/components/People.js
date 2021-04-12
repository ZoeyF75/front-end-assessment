import Article from "./Article";
import Student from "./Student";

const People = ({ people }) => {
  const calculateAvg = (avg) => {
    let total = 0;
    avg.forEach(number => {
      total += Number.parseInt(number);
    });
    return `${Math.floor(total / avg.length * 100) / 100}%`;
  }
  
  return (
    <>
      <div>
        {!people.students ? 
          <div>loading...</div> 
        :
          <Article
          firstname={people.students[0].firstName}
          lastname={people.students[0].lastName}
          email={people.students[0].email}
          company={people.students[0].company}
          skill={people.students[0].skill}
          average={calculateAvg(people.students[0].grades)}
          pic={people.students[0].pic}
          />
        }
      </div>
    </>
  )
}

export default People;

// people.students.forEach(element => {
//   console.log(element.firstName);
//   <Article
//   firstname={element.firstName}
//   lastname={element.lastName}
//   email={element.email}
//   company={element.company}
//   skill={element.skill}
//   average={element.grades}
//   />
// })