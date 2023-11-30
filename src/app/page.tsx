"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import getBlocks from "./getBlocks";

export default function Home() {

  const [blocks, updateBlocks] = useState<{id:number, title:string, code:string}[]>([]);
  useEffect(()=>{
    getBlocks().then(blocks=>updateBlocks(blocks));
  },[]);
  const renderBlocks = blocks.map((block)=>(
    <Link href={`/blocks/${block.id}`} key={block.id} 
      className="flex justify-between items-center p-2 border rounded">
      {block.title}
      <div>View</div>
    </Link>
  ));

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Blocks</h1>
        <Link href="/blocks/new" className="border p-2 rounded">New</Link>
      </div>
      <div className="flex flex-col gap-2">{renderBlocks}</div>
    </div>
  )
}
