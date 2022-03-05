import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import d from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Alihan' },
        { id: 2, name: 'Daniar' },
        { id: 3, name: 'Umar' },
        { id: 4, name: 'Abdurahim' },
        { id: 5, name: 'Sanzhar' },
        { id: 6, name: 'AlihUlann' }
    ]
    let messages = [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Whats up, Bro?' },
        { id: 3, message: 'You can fly!' },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);


    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={d.messages}>
                <div>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;