import '../App.css';
const Memories = () => {
  return (<div id = "bodyDiv">
             <ul>
            {todos.map(item => <Todo key = {item.id} arr={item} />)}
           </ul>
            <footer>
        <p>Github Repository: <a href="https://github.com/pearlhulbert/CreativeProject3">https://github.com/pearlhulbert/CreativeProject3</a></p>
        <p>By: Noelle Marshall, Pearl Hulbert, and Logan Thurman</p>
    </footer>
          </div>)
};

export default Memories;