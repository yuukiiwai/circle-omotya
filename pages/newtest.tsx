import { NextPage } from "next";
import Side from "./components/side";
import styles from "../styles/Home.module.css";
import thstyle from "../styles/newtest.module.css";
import { useState } from "react";
import { istitleType } from "../model/def/types";
import { is___questions, ___question } from "@yuukiiwai/hobby-enquete-component";
import Link from "next/link";


const Newtest:NextPage = () =>{
    const [newtitle,setNewtitle] = useState<string>("");
    const [newtest,setNewtest] = useState<string>("");

    const durl = process.env.NEXT_PUBLIC_SERVURL as string;

    const sendProcess = async () => {
        if(!(istitleType(JSON.parse(newtitle)) && is___questions(JSON.parse(newtest))) ){
            console.log("型が合いません");
            return;
        }
        const res = await fetch(durl,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'text/plain'
            },
            body:JSON.stringify({
                test:newtest,
                titles:newtitle
            })
        });
        if(res.ok) alert("IDは"+await res.text()+"に決まりました。");
        return;
    }

    return (
        <div className={styles.center}>
            <div className={styles.content}>
                <div className={styles.side}>
                    <Side/>
                </div>
                <main className={styles.main}>
                    <h1>心理テスト作成</h1>
                    <h2>タイトルjson</h2>
                    <textarea 
                    onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
                        setNewtitle(e.target.value);
                    }}
                    className={thstyle.title}></textarea>
                    <br/>
                    <h2>テストjson</h2>
                    <textarea 
                    onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
                        setNewtest(e.target.value);
                    }}
                    className={thstyle.content}></textarea>
                    <br/>
                    <button type={"button"}
                    onClick={sendProcess}>
                        送信
                    </button>
                </main>
                <div className={styles.adside}>
                    <h3>タイトルフォーマット</h3>
                    <span>{"{\n\"headtitle\":string,\n\"resulttitle\":string\n}"}</span>
                    <h3>コンテンツフォーマット</h3>
                    <span>
                        <Link href={"https://www.npmjs.com/package/@yuukiiwai/hobby-enquete-component"}>こちら</Link>
                        {"を参考に"}
                        <br />
                        {"___question[]型になるよう"}
                        <br />
                        {"書いてください。"}
                    </span>
                </div>
            </div>
            <div className={styles.center}>
                <footer className={styles.footer}>
                ©2022 omotya.yukiserv.com
                </footer>
            </div>
        </div>
    );
}

export default Newtest