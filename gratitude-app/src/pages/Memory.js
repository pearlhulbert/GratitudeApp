import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {db} from '../firebaseConfig.js';
import { doc, deleteDoc} from "firebase/firestore";
import '../todo.css';

const Memory=({arr})=>{
    
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    
    let currDate = arr.item.timestamp;
    let dateString = "Now";
    if (currDate != null) {
        dateString = currDate.toDate().toLocaleDateString('en-us', options);
    }
    
    
    return (
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar />
                <ListItemText primary={dateString} secondary={arr.item.entry} />
            </ListItem>
            <DeleteIcon fontSize="large" style={ {opacity:0.7} } onClick={() => {deleteDoc(doc(db, 'memories', arr.id))}} />
        </List>
    )
};
export default Memory;
