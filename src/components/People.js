import Article from "./Article";

//People is the plural, maps through list of students and makes article for each one
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