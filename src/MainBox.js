import React, { useEffect, useState } from 'react'
import Notes from './Notes';

function MainBox() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    let [notes,setNotes] = useState([]);
    const [editCard, setEditCard] = useState({});

    window.onload = ()=>{
        if(localStorage.getItem("notes") !== null) setNotes(JSON.parse(localStorage.notes));
    }

    useEffect(()=>{
        console.log(editCard);
    },[editCard])

    const openBox = (event) => {
        event.target.placeholder = "Title"
        document.getElementsByClassName("description_field")[0].style.display = "block"
    }

    const addNewNote = () => {
        (localStorage.getItem("notes") !== null) ? notes = JSON.parse(localStorage.notes) : notes = [];
        setNotes((...prevnotes) => [...prevnotes,{
            id: (notes.lenght > 0) ? notes[notes.length - 1].id + 1 : 0,
            title: title,
            description: description
        }])
        localStorage.setItem("notes", JSON.stringify(notes));
        
    }

    const clearBox = () => {
        document.getElementsByClassName("title_input")[0].value = "";
        document.getElementsByClassName("description_input")[0].value = "";
    }

    return (
        <>
        <div className="main flex justify-center p-10">
            <div className="creat_box mt-5 w-fit p-3 flex flex-col flex-wrap justify-center content-center shadow rounded">
                <div className="title_field flex w-min-fit">
                    <input type="text"
                        className="title_input w-128 h-10 outline-none p-2"
                        placeholder='Take a note ...'
                        onClick={openBox}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="description_field divide-y-0 relative pb-10 hidden">
                    <textarea
                        className='description_input w-128 p-2 text-sm outline-none h-80'
                        placeholder='Take a note ...'
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <div className='absolute flex gap-1 bottom-1 right-2'>
                        <button
                            className="add_btn p-1 w-32 h-8 hover:border hover:bg-yellow-100 rounded text-center"
                        onClick={addNewNote}
                        > Add Note</button>
                        <button
                            className="clear_btn p-1 w-32 h-8 hover:border hover:bg-yellow-100 rounded text-center"
                            onClick={clearBox}
                        >Clear</button>
                    </div>
                </div>
            </div>



        </div>
            <div className="notes_container flex p-12 flex-wrap gap-5">
                { (notes.length>0) && 
                    notes.map((ele, index) => {
                        return(<Notes key={index} id={index} title = {ele.title} description={ele.description} setEditCard = {setEditCard} />)
                    })
                }
            </div>
    </>
    )
}

export default MainBox
