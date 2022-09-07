import { FC } from "react";
import Link from "next/link";
const Side:FC = () =>{
    return(
        <div>
            <Link href="/"><span className="point">Top</span></Link>
            <hr />
            <Link href="/alltest"><span className="point">テスト一覧</span></Link>
            <hr />
            <Link href="/newtest"><span className="point">テスト新規作成</span></Link>
            <hr />
        </div>
    );
}

export default Side;