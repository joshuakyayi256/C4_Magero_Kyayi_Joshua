import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [loginError, setLoginError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation - replace with your own logic
    if (name === 'John' && email === 'john@example.com' && password === 'password') {
      // Login successful
      setShowLoginForm(false);
      setLoginError('');
    } else {
      // Login failed
      setLoginError('Invalid login credentials. Please try again.');
    }
  };

  return (
    <div className='mt-10'>
    <h1 className='text-center text-4xl mb-4'>Log In</h1>

      {showLoginForm ? (

        <form onSubmit={handleSubmit} className='max-w-2xl mx-auto'>

          <div>
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              placeholder='John Doe'
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              placeholder='johndoe@gmail.com'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD:</label>
            <input
              type="password"
              placeholder='****password****'
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          <button>Log in</button>
        </form>

      ) : (
        <p>Welcome, {name}!</p>
      )}
    </div>
  );
};

export default App;

