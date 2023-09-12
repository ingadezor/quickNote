import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

//Floating Action Button used from material ui

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  //1. getting note info:
  function handleChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    setNote((prevNote) => {
      if (inputName === "title") return { ...prevNote, title: inputValue };
      else return { ...prevNote, content: inputValue };
    });

    //console.log(note);
  }

  //2. by default title and + button are not shown:
  //when user clicks on texarea -> note title and add button show up
  let [isShown, setIsShown] = React.useState(false);
  function handleClick() {
    setIsShown(true);
  }

  return (
    <div className="input-area">
      <form
        onSubmit={(event) => {
          if (note.title != "") {
            props.addNote(note);
            setNote({ title: "", content: "" });
          } else alert("Title is mandatory");

          event.preventDefault();
        }}
      >
        {isShown ? (
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          placeholder="Type a note..."
          rows={isShown ? 3 : 1}
          value={note.content}
        ></textarea>

        <Zoom in={isShown}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
