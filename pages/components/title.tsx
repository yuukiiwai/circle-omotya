import { FC, useState } from "react";

interface props{
    title:string | undefined
}

const Title:FC<props> = (props:props) => {

    return(
        <>
            <h2>{props.title}</h2>
        </>
    );
}

export default Title;