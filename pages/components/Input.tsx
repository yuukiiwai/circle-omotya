import { FC, useState } from "react";
import styles from '../../styles/Home.module.css';

interface props{
    send:(e:string)=>void,
}

const Input:FC<props> = (props:props) => {
    const [id,setID] = useState("");

    const updateID = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setID(e.target.value);
    }

    const Keydown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter"){
            props.send(id);
        }
    }

    return(
        <>
            <span>ID:</span>
            <input className={styles.center} type={"text"} onChange={updateID} onKeyDown={Keydown}></input>
            <button onClick={()=>{props.send(id)}}>リクエスト</button>
        </>
    );
}

export default Input;