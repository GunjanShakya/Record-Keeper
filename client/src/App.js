// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CodeforInterview from './components/CodeforInterview';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUser';
import EditUsers from './components/EditUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState } from 'react';


function App() {

  // const [name,newname]= useState('Sahil');

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<CodeforInterview />} /> 
          <Route path='/add' element={<AddUsers />} />
          <Route path='/all' element={<AllUsers />} />
          <Route path='/edit/:id' element={<EditUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
