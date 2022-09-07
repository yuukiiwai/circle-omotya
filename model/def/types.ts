export type resultType = {
    result:string,
    display:boolean
}

export type titlesType = {
    headtitle:string,
    resulttitle:string
}

export const istitleType = (arg:any):arg is titlesType => {
    return typeof(arg.headtitle) === "string" && typeof(arg.resulttitle) === "string";
}

export type testInfo = {
    id:string,
    title:string
}

export type testsType ={
    tests:Array<testInfo>
}