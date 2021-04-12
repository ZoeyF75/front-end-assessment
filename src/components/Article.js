import React from 'react'

const Article = ({ student }) => {
  const calculateAvg = (avg) => {
    let total = 0;
    avg.forEach(number => {
      total += Number.parseInt(number);
    });
    return `${Math.floor(total / avg.length * 100) / 100}%`;
  }

  return (
    <article>
      <img src={student.pic} alt="" width="150" height="150"></img>
      <div className="textContainer">
        <h1>{student.firstName} {student.lastName}</h1>
        <div className="text">Email: {student.email}</div>
        <div className="text">Company: {student.company}</div>
        <div className="text">Skill: {student.skill}</div>
        <div className="text">Average: {calculateAvg(student.grades)}</div>
      </div>
    </article>
  )
}

export default Article;
