import { Enq,___question,___answer } from '@yuukiiwai/hobby-enquete-component'
import type { NextPage } from 'next'
import Head from 'next/head'
import Input from './components/Input'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from "axios"
import Result from './components/result'
import { resultType,titlesType } from '../model/def/types'
import Title from './components/title'
import Side from './components/side'
import ReactLoading from 'react-loading';

const Home: NextPage = () => {
  const [data,setData] = useState<Array<___question>>([]);
  const [titles,setTitles] = useState<titlesType>({"headtitle":"","resulttitle":""});
  const [result,setRes] = useState<resultType>({result:"",display:false});
  const [err,setErr] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false);

  const durl = process.env.NEXT_PUBLIC_SERVURL as string;
  const getData = (e:string) =>{
    setLoading(true);
    setData([]);
    axios.get(durl+"?id="+e)
    .then((res)=>{
      if(res.data === 0){
        setErr(true);
        console.log(res.data);
        setLoading(false);
        return;
      }
      const newdata = JSON.parse(res.data.data) as Array<___question>;
      const newtitles = JSON.parse(res.data.titles) as titlesType;
      setData(newdata);
      setTitles(newtitles);
      setLoading(false);
    });
    setRes({result:"",display:false});
    setErr(false);
  }

  const getAns = (e:string)=>{
    if(e.indexOf("l") === -1){
      return;
    }
    setRes({
      result:e.split(",")[1],
      display:true
    });
  }
  return (
    <div className={styles.center}>
      <Head>
        <title>ぐるぐる質問</title>
        <meta name="description" content="ぐるぐる質問で遊ぼう" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <div className={styles.side}>
          <Side/>
        </div>
        <main className={styles.main}>
          <h1 className={styles.center}>心理テストおもちゃ箱</h1>
          <Input
          send={getData}
          />
          {
            err &&
            <p>error</p>
          }
          {
            <Title
            title={titles?.headtitle}
            />
          }
          {
            data.length !== 0 &&
            <Enq
            getAns={getAns}
            getRest={()=>{}}
            q={data}
            />
          }
          {
            result.display &&
            <Result
              title={(titles as titlesType).resulttitle}
              result={result.result}
            />
          }
        </main>
        {
          loading &&
          <ReactLoading className={styles.center} type="spin" width={100} color={"#11ff11"}/>
        }
      </div>
      <div className={styles.center}>
        <footer className={styles.footer}>
          ©2022 omotya.yukiserv.com
        </footer>
      </div>
    </div>
  )
}

export default Home
