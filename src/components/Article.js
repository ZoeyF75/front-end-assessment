import React from 'react'

const Article = ({ firstname, lastname, email, company, skill, average, pic }) => {
  return (
    <article>
      <img src={pic} alt="" width="150" height="150"></img>
      <div className="textContainer">
        <h1>{firstname} {lastname}</h1>
        <div className="text">Email: {email}</div>
        <div className="text">Company: {company}</div>
        <div className="text">Skill: {skill}</div>
        <div className="text">Average: {average}</div>
      </div>
    </article>
  )
}

export default Article;
