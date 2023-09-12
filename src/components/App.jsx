import React from "react";


import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes.js";
import CreateArea from "./CreateArea";


//Adding a functionality to add and remove notes

function App(){
    let [notes, setNotes] = React.useState([]); //list of notes; initially empty



    //add note to the list of notes:
    function addNote(newNote){
        //console.log(newNote);
        setNotes( (prevNotes) => {
            return [...prevNotes, newNote];
        })
         //console.log(notes);
    }
     

    //delete note:  
    function deleteNote(noteId){ //noteId is passed from <Note /> component's button
        //console.log(notes);
        
        setNotes( (prevNotes) => {
            return prevNotes.filter( (note, index) => {
                return index !== noteId;
            })
        })
    }




    return(
        <div>
            <Header />

            <CreateArea addNote={addNote}/>

            {/* rendering all the notes available */}
            {
                notes.map( (note, index) =>{
                    return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
            })
            }

            {/* {notes.map((note) => {
                return <Note key={note.id} title={note.title} content={note.content}/>
            }) } */}
        
            <Footer />
        </div>
        
    )
}




export default App;