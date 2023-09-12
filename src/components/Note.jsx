import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

//use material ui package for icons, slide menu etc. Visit: https://mui.com/

function Note(props) {
  return (
    <div className="note">
      <button
        onClick={() => {
          //console.log(props.title);
          props.deleteNote(props.id);
        }}
      >
        <ClearIcon />
      </button>

      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
