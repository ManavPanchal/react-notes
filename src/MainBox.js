import React, { useEffect, useState } from 'react'
import CreateNotes from './CreateNotes';
import EditBox from './EditBox';
import Notes from './Notes';

function MainBox() {
    let [notes, setNotes] = useState([]);
    const [editCard, setEditCard] = useState();
    const [openEditBox, setOpenEditBox] = useState(false);

    if (openEditBox) {
        document.getElementsByClassName("main_box")[0].style.backdropFilter = "blur(5px)";
    }

    const showEditBox = () => {
        document.getElementsByClassName("main_box")[0].style.filter = "blur(1px)";
        return (
            <EditBox setOpenEditBox = {setOpenEditBox}/>
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
        else if (editCard?.modification === "edit") setOpenEditBox(!openEditBox);
        else return;
    }, [editCard])

    return (
        <>
            <div className='main_box'>
                <div className="main flex justify-center p-10">
                    <CreateNotes setNotes={setNotes} notes={notes} />
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
        </>
    )
}

export default MainBox
