import React from 'react'

const Article = ({ student }) => {
  return (
    <article>
      <img src={student.pic} alt="" width="150" height="150"></img>
      <div className="textContainer">
        <h1>{student.firstName} {student.lastName}</h1>
        <div className="text">Email: {student.email}</div>
        <div className="text">Company: {student.company}</div>
        <div className="text">Skill: {student.skill}</div>
        <div className="text">Average: {student.average}</div>
      </div>
    </article>
  )
}

export default Article;
