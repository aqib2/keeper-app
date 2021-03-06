import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [isExpanded, setIsExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        body: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevnote => {
            return {
                ...prevnote,
                [name]: value,

            }
        })
    }

    function submitNote(event) {
      props.onAdd(note)
      setNote({
        title: "",
        body: ""
      })
      event.preventDefault()

    }

    function expanded() {
      setIsExpanded(true)
    }

  return (
    <div>
      <form className="create-note">
        
          {
            isExpanded 
            ?
            <input 
              name="title" 
              onChange={handleChange} 
              value={note.title} 
              placeholder="Title" 
            />
            :
            null
          }

        <textarea 
        name="content" 
        onClick={expanded}
        onChange={handleChange} 
        value={note.content} 
        placeholder="Take a note..." 
        rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} >
            <AddIcon />
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;