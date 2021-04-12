import React from 'react';
import { useState } from 'react';

const Article = ({ student }) => {
  const [visibility, setVisibility] = useState(false);

  const calculateAvg = (avg) => {
    let total = 0;
    avg.forEach(number => {
      total += Number.parseInt(number);
    });
    return `${Math.floor(total / avg.length * 100) / 100}%`;
  }

  const onClick = () => {
    console.log("button clicked");
    visibility ? setVisibility(false) : setVisibility(true);
  }

  return (
    <article>
      <div className="leftContainer">
        <img src={student.pic} alt="" width="150" height="150"></img>
        <div className="textContainer">
          <h1>{student.firstName} {student.lastName}</h1>
          <div className="text">Email: {student.email}</div>
          <div className="text">Company: {student.company}</div>
          <div className="text">Skill: {student.skill}</div>
          <div className="text">Average: {calculateAvg(student.grades)}</div>
          <div className="text" id={visibility ? "toggleShow" : "toggleHide" }>Test Scores</div>
          <div className="text" id={visibility ? "toggleShow" : "toggleHide" }>Test Scores</div>
          <div className="text" id={visibility ? "toggleShow" : "toggleHide" }>Test Scores</div>
        </div>
      </div>
      <div className="rightContainer">
      <button type="button" class="accordion_button" onClick={onClick}>+</button>
      </div>
    </article>
  )
}


export default Article;
