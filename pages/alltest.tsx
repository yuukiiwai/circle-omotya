import { NextPage } from "next";
import Side from "./components/side";
import styles from "../styles/Home.module.css";
import thstyles from "../styles/alltitle.module.css";
import {testsType } from "../model/def/types";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from 'react-loading';
import Head from 'next/head'
import Headcom from "./components/headcom";

const Alltest:NextPage = () =>{
    const [tests,setTests] = useState<testsType>({tests:[]});
    const [loading,setLoading] = useState<boolean>(false);

    const durl = process.env.NEXT_PUBLIC_SERVURL as string;
    useEffect(()=>{
        setLoading(true);
        axios.get(durl)
        .then((res)=>{
            let data = res.data;
            let newtests:testsType = {tests:[]};
            for(let i = 0;i<data.length;i++){
                newtests.tests.push({
                    id:data[i].id,
                    title:JSON.parse(data[i].title).headtitle
                });
            }
            setTests(newtests);
            setLoading(false);
        });
    },[durl]);
    return(
        <div className={styles.center}>
            <Head>
                <title>心理テスト一覧</title>
                <meta name="description" content="心理テスト一覧" />
                <Headcom />
            </Head>
            <div className={styles.content}>
                <div className={styles.side}>
                    <Side/>
                </div>
                <main className={styles.main}>
                    <h1>心理テスト一覧</h1>
                    <table className={thstyles.table}>
                        <thead>
                            <tr >
                                <th className={thstyles.bboard}>ID</th>
                                <th className={thstyles.bboard}>タイトル</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tests.tests.map((item,key)=>{
                                return(
                                    <tr key={key}>
                                        <td className={thstyles.bboard}>{item.id}</td>
                                        <td className={thstyles.bboard}>{item.title}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {
                        loading &&
                        <ReactLoading className={styles.center} type="spin" width={100} color={"#11ff11"}/>
                    }
                </main>
            </div>
            <div className={styles.center}>
                <footer className={styles.footer}>
                ©2022 omotya.yukiserv.com
                </footer>
            </div>
        </div>
    );
}

export default Alltest;