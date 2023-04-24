import React, {useState} from 'react'

function CreateNotes({notes, setNotes}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    

    window.onload = () => {
        if (localStorage.notes != undefined) setNotes(JSON.parse(localStorage.notes));
    }

    const openBox = (event) => {
        event.target.placeholder = "Title"
        document.getElementsByClassName("description_field")[0].style.display = "block"
    }

    const addNewNote = () => {
        let tempNotes
        (localStorage.notes != undefined) ? tempNotes = JSON.parse(localStorage.notes) : tempNotes = [];
        tempNotes.unshift({
            id: 0,
            title: title,
            description: description
        });
        tempNotes.forEach((ele,index)=>{
            ele.id = index;
        })
        setNotes(tempNotes)
        localStorage.setItem("notes", JSON.stringify(tempNotes));
        document.getElementsByClassName("description_field")[0].style.display = "none";
        clearBox();
    }

    const clearBox = () => {
        document.getElementsByClassName("title_input")[0].value = "";
        document.getElementsByClassName("description_input")[0].value = "";
        setDescription("");
        setTitle("");
    }

    return (
        <div className="creat_notes mt-5 w-fit p-3 flex flex-col flex-wrap justify-center content-center shadow rounded">
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
    )
}

export default CreateNotes
