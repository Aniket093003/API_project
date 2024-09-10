import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const switchForm = (formName) => {
    setCurrentForm(formName);
    // console.log("Form switched to:", formName); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">My Application</h1>
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        {currentForm === 'login' 
          ? <LoginForm switchForm={switchForm} /> 
          : <SignUpForm switchForm={switchForm} />
        }
      </div>
    </div>
  );
};

export default App;
