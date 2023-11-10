import { useState } from 'react'
import './App.css'
import React from 'react';

const user = {
  fullName: 'MAGERO KYAYI JOSHUA',
  education: 'MAKERERE UNIVERSITY AND AZUBI AFRICA',
  professionalBackground: 'STUDENT',
  skills: ['UI DESIGN', 'FRONT-END DEVELOPMENT', 'CLOUD ENGINEERING'],
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="portfolio">
      <h1>{user.fullName}</h1>
      <section>
        <h2>Education</h2>
        <p>{user.education}</p>
      </section>
      <section>
        <h2>Professional Background</h2>
        <p>{user.professionalBackground}</p>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App



