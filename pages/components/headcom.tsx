import { FC } from "react";

const Headcom:FC = () => {
    return(
        <>
            <link rel="icon" href="/favicon.ico" />
            <script async src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+process.env.NEXT_PUBLIC_GADCLICODE} crossOrigin="anonymous"></script>
        </>
    );
}

export default Headcom;