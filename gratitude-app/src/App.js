import './App.css';
import React, {useInsertionEffect, useState} from 'react';
import {TextField , Button } from '@mui/material';
import Memory from './pages/Memory';
import { db } from './firebaseConfig.js';
import { collection, query, onSnapshot, serverTimestamp, addDoc, orderBy } from 'firebase/firestore';

function App() {
  const [entries, setEntries]=useState([]);
  const [input, setInput]=useState('');
  const q = query(collection(db, 'memories'), orderBy('timestamp', 'desc'));

  useInsertionEffect(() => {
    onSnapshot(q, (snapshot)=> {
      setEntries(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input]);

  const addEntry=(e)=>{
    e.preventDefault();
    addDoc(collection(db, 'memories'), {
      entry:input,
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
        <Button variant="contained" color="primary" onClick={addEntry}  >Add Entry</Button>
      </form>
       <ul>
          {entries.map(item => <Memory key = {item.id} arr={item} />)}
        </ul>
                    <footer>
        <p>Github Repository: <a href="https://github.com/pearlhulbert/GratitudeApp">https://github.com/pearlhulbert/GratitudeApp</a></p>
        <p>By: Noelle Marshall and Pearl Hulbert</p>
    </footer>
    </div>
  );
}
export default App;
