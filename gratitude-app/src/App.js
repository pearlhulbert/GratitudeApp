import './App.css';
import React, {useInsertionEffect, useState} from 'react';
import {TextField , Button } from '@mui/material';
import Memory from './pages/Memory';
import { db } from './firebaseConfig.js';
import { collection, query, onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';

//const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
function App() {
  const [todos, setTodos]=useState([]);
  const [input, setInput]=useState('');

  useInsertionEffect(() => {
    onSnapshot(collection(db, 'memories'), (snapshot)=> {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input]);

  const addTodo=(e)=>{
    e.preventDefault();
    addDoc(collection(db, 'memories'), {
      todo:input,
      timestamp: serverTimestamp()
  })
    setInput('')
  };

  return (
    <div className="App">
      <div id = "header">
      <h1>Personal Journal</h1>
      </div>
      <form>
        <TextField id="outlined-basic" label="Create Journal Entry" variant="outlined" style={{margin:"0px 5px"}} size="small" value={input}
        onChange={e=>setInput(e.target.value)} />
        <Button variant="contained" color="primary" onClick={addTodo}  >Add Entry</Button>
      </form>
       <ul>
          {todos.map(item => <Memory key = {item.id} arr={item} />)}
        </ul>
                    <footer>
        <p>Github Repository: <a href="https://github.com/pearlhulbert/GratitudeApp">https://github.com/pearlhulbert/GratitudeApp</a></p>
        <p>By: Noelle Marshall and Pearl Hulbert</p>
    </footer>
    </div>
  );
}
export default App;