import { DeleteOutline } from '@mui/icons-material'
import React from 'react'

function Notes({ id, title, description, setEditCard}) {

    const deleteCard =()=>{
        setEditCard({modification:"delete", id:id});
    }

    return (
        <div className='card_box w-56 max-h-56 rounded shadow p-3 relative'>
            <p className="card_id hidden">{id}</p>
            <div className="card_title text-lg">
                {title}
            </div>
            <div className="card_description max-h-fit text-sm">
                {description}
            </div>
            <div className="delete_btn hover:cursor-pointer absolute bottom-1 right-1 hidden">
                <DeleteOutline onClick={deleteCard}/>
            </div>
        </div>
    )
}

export default Notes
