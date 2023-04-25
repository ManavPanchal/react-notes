import React, {useState, useContext, useEffect} from 'react'
import { mainBoxContex } from './MainBox';

function EditBox({editId, setOpenEditBox}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {notes,setNotes} = useContext(mainBoxContex);

    const editNote = ()=>{
        let tempNotes = JSON.parse(localStorage.notes)
        tempNotes[editId] = {
            id:editId,
            title:title,
            description:description
        }
        localStorage.notes = JSON.stringify(tempNotes);
        setNotes(tempNotes);
        closeBox();
    }

    const closeBox = ()=>{
        document.getElementsByClassName("main_box")[0].style.filter = "blur(0)";
        setOpenEditBox(false);
    }

    useEffect(()=>{
        let {title, description} = notes[editId];
        if(title != "")
            document.getElementsByClassName("title_input")[1].placeholder = title;
        if(description != "")
            document.getElementsByClassName("description_input")[1].placeholder = description;
        
    })

    return (
        <div id='edit_box'>
            <div className="creat_notes mt-5 w-fit p-3 flex flex-col flex-wrap justify-center content-center shadow rounded">
                <div className="title_field flex w-min-fit">
                    <input type="text"
                        className="title_input w-128 h-10 outline-none p-2"
                        placeholder='Take a note ...'
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="description_field divide-y-0 relative pb-10">
                    <textarea
                        className='description_input w-128 p-2 text-sm outline-none h-80'
                        placeholder='Take a note ...'
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <div className='absolute flex gap-1 bottom-1 right-2'>
                        <button
                            className="add_btn p-1 w-32 h-8 hover:border hover:bg-yellow-100 rounded text-center"
                        onClick={editNote}
                        > Edit Note</button>
                        <button
                            className="clear_btn p-1 w-32 h-8 hover:border hover:bg-yellow-100 rounded text-center"
                        onClick={closeBox}
                        >Cancel Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBox
