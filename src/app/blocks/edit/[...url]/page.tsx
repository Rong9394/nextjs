"use client";
import { useState } from "react";
import editBlock from "./editBlock";

export default function BlockEditPage(props:any) {
    
    const {url} = props.params;
    const id = decodeURIComponent(url[0]);
    const [title, changeTitle] = useState(decodeURIComponent(url[1]));
    const [code, changeCode] = useState(decodeURIComponent(url[2]));
    
    return (
        <form action={()=>editBlock(id, title, code)}>
            <h3 className="front-bold m-3 w-full text-center">Edit a Block</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input className="border rounded p-2 w-full" name="title" id="title" value={title} onChange={(e)=>changeTitle(e.target.value)}/>
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea className="border rounded p-2 w-full" name="code" id="code" value={code} onChange={(e)=>changeCode(e.target.value)}/>
                </div>
                <button className="rounded p-2 bg-blue-300 hover:bg-blue-600" type="submit">Edit</button>
            </div>
        </form>
    )
}