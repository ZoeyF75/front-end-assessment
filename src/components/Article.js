import React from 'react';
import { useState } from 'react';

const Article = ({ student }) => {
  const [visibility, setVisibility] = useState(false);
  const [text, setText] = useState('+');
  const [tag, setTag] = useState([]);
  const [empty, setEmpty] = useState('');
  
  const calculateAvg = (avg) => {
    let total = 0;
    avg.forEach(number => {
      total += Number.parseInt(number);
    });
    return `${Math.floor(total / avg.length * 100) / 100}%`;
  }

  const test = (grades) => {
    let testScores = [];
    for (let i = 0; i < grades.length; i++) {
      testScores.push(`Test ${i+1}: ${Number.parseInt(grades[i])}%`);
    }
    return testScores;
  }

  const onClick = () => {
    visibility ? setVisibility(false) : setVisibility(true);
    visibility ? setText("+") : setText("-");
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      // setTag(event.target.value);
      setTag([...tag, event.target.value]);
      document.querySelectorAll("textarea.text").forEach(textArea => {
        textArea.value = ''; //sets value to zero but placeholders remain
      })
      console.log(tag);
    }
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
          {test(student.grades).map((grade) => <div className="text" id={visibility ? "toggleShow" : "toggleHide" }>{grade}</div>)}
          <div className="tagContainer" id={tag.length > 0 ? "toggleShow" : "toggleHide" }>
            {tag.map((t) => <p>{t}</p>)}
          </div>
            <textarea placeholder="Add a tag" className="text" id="add_tag" required minLength="1" onKeyDown={handleKeyUp}></textarea>
        </div>
      </div>
      <div className="rightContainer">
      <button type="button" className="accordion_button" id="toggler" onClick={onClick}>{text}</button>
      </div>
    </article>
  )
}

export {
  Article
};


