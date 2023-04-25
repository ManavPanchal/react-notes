import React, { createContext, useEffect, useState } from 'react'
import CreateNotes from './CreateNotes';
import EditBox from './EditBox';
import Notes from './Notes';

export const mainBoxContex = createContext();

function MainBox() {
    let [notes, setNotes] = useState([]);
    const [editCard, setEditCard] = useState();
    const [openEditBox, setOpenEditBox] = useState(false);


    const showEditBox = () => {
        document.getElementsByClassName("main_box")[0].style.filter = "blur(5px)";
        return (
            <EditBox setOpenEditBox = {setOpenEditBox} editId = {editCard?.id}/>
        )
    }

    useEffect(() => {
        let tempNotes;
        (localStorage.notes !== undefined) ? tempNotes = JSON.parse(localStorage.notes) : tempNotes = [];
        if (editCard?.modification === "delete") {

            tempNotes = tempNotes.filter((ele) => {
                return ele.id != editCard.id
            })
            tempNotes.forEach((ele, index) => ele.id = index)
            setNotes(tempNotes);
            localStorage.setItem("notes", JSON.stringify(tempNotes));

        }
        else if (editCard?.modification === "edit") setOpenEditBox(true);
        else return;
    }, [editCard])

    return (
        <mainBoxContex.Provider value={{notes,setNotes}}>
            <div className='main_box'>
                <div className="main flex justify-center p-10">
                    <CreateNotes/>
                </div>
                <div className="notes_container flex p-12 flex-wrap gap-5">
                    {(notes?.length > 0) &&
                        notes.map((ele, index) => {
                            return (
                                <Notes
                                    key={index}
                                    id={index}
                                    title={ele.title}
                                    description={ele.description}
                                    setEditCard={setEditCard}
                                />)
                        })
                    }
                </div>
            </div>
            {openEditBox && showEditBox()}
        </mainBoxContex.Provider>
    )
}

export default MainBox
