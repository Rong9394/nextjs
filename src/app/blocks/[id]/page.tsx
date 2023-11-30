
import Link from "next/link";
import { db } from "../db";

export default async function BlockViewPage(props:any) {
    const id = decodeURIComponent(props.params.id);
    const block = await db.block.findUnique({
        where: {
            id: parseInt(id)
        },

    });
    

    
    return (
        <div className="flex flex-col gap-4">
            <div>
                <Link href={`/blocks/edit/${id}/${block?.title}/${block?.code}`} className="w-1/12 rounded p-2 bg-blue-300 hover:bg-blue-600 mr-2" type="submit">Edit</Link>
                <Link href={`/blocks/delete/${id}`} className="w-1/12 rounded p-2 bg-blue-300 hover:bg-blue-600 mr-2" type="submit">Delete</Link>
            </div>
            <div className="flex gap-4 text-7xl font-extrabold">
                {block?.title}
            </div>
            <div className="flex text-xl gap-4">
                {block?.code}
            </div>
        
        </div>
    )
}