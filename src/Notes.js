import { DeleteOutline} from '@mui/icons-material'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Tooltip, IconButton  } from '@mui/material';
import React from 'react'

function Notes({ id, title, description, setEditCard }) {

    return (
        <div className='card_box w-56 max-h-56 rounded shadow p-3 relative'>
            <p className="card_id hidden">{id}</p>
            <div className="card_title text-lg">
                {title}
            </div>
            <div className="card_description max-h-fit text-sm">
                {description}
            </div>
            <div className="card_modification absolute bottom-1 right-1 hidden">
                <div className="edit_btn hover:cursor-pointer ">
                    <Tooltip title="Edit">
                        <IconButton onClick={() =>  setEditCard({ modification: "edit", id: id })}>
                            <ModeEditIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
                
                <div className="delete_btn hover:cursor-pointer">
                    <Tooltip title="Delete">
                        <IconButton onClick={() =>  setEditCard({ modification: "delete", id: id })}>
                            <DeleteOutline  />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            
        </div>
    )
}

export default Notes
