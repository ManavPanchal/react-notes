import React from 'react'

function EditBox({setOpenEditBox}) {

    const editNote = ()=>{
        setOpenEditBox(false)
    }

    const closeBox = ()=>{
        setOpenEditBox(false);
    }

    return (
        <div id='edit_box' className='absolute top-6 right-auto left-auto '>
            <div className="creat_notes mt-5 w-fit p-3 flex flex-col flex-wrap justify-center content-center shadow rounded">
                <div className="title_field flex w-min-fit">
                    <input type="text"
                        className="title_input w-128 h-10 outline-none p-2"
                        placeholder='Take a note ...'
                    // onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className="description_field divide-y-0 relative pb-10">
                    <textarea
                        className='description_input w-128 p-2 text-sm outline-none h-80'
                        placeholder='Take a note ...'
                    // onChange={(event) => setDescription(event.target.value)}
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
