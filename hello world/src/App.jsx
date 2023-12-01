import './App.css'
import React from 'react';
import Button from './components/Button';

const user = {
  fullName: 'MAGERO KYAYI JOSHUA',
  education: 'MAKERERE UNIVERSITY AND AZUBI AFRICA',
  professionalBackground: 'STUDENT',
  skills: ['UI DESIGN', 'FRONT-END DEVELOPMENT', 'CLOUD ENGINEERING'],
};

function App() {
  return (
    <div>

      <div className="centered-container">
      <Button label="Login" />
      <Button label="Signin" />
     </div>

    </div>
            

  );
}

export default App









