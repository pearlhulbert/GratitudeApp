import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {db} from '../firebaseConfig.js';
import { doc, deleteDoc } from "firebase/firestore";
import '../todo.css';

const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const Memory=({arr})=>{
    return (
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar />
                <ListItemText primary={arr.item.timestamp.toDate().toLocaleDateString('en-us', options)} secondary={arr.item.todo} />
            </ListItem>
            <DeleteIcon fontSize="large" style={ {opacity:0.7} } onClick={() => {deleteDoc(doc(db, 'memories', arr.id))}} />
        </List>
    )
};
export default Memory;