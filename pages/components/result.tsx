import { FC, useState } from "react";
import { resultType } from "../../model/def/types";
import styles from '../../styles/res.module.css'

interface props{
    title:string | undefined
    result : string
}

const Result:FC<props> = (props:props) => {
    return(
        <div>
            <h2>{props.title}</h2>
            <p className={styles.result}>{props.result}</p>
        </div>
    );
}

export default Result;