import React from "react";
import { NavLink } from "react-router-dom";
import d from './Dialogs.module.css';
const DialogItem =(props) =>{
    return 

}

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog + '' + d.active}>
                    <NavLink to="/dialogs/1">Alihan</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/2">Daniar</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/3">Umar</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/4">Abdurahim</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/5">Sanzhar</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/6">Ulan</NavLink>
                </div>
            </div>


            <div className={d.messages}>
                <div>
                    <div className={d.message}>Hello</div>
                    <div className={d.message}>Whats up,Bro?</div>
                    <div className={d.message}>You can fly!</div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;