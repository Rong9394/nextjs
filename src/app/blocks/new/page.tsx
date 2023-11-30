import { redirect } from "next/navigation";
import { db } from "../db";

export default function BlockCreatePage() {

    async function createBlock(formData: any) {
        "use server"
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;
        await db.block.create({data:{title, code}});
        redirect("/");
    }
    
    return (
        <form action={createBlock}>
            <h3 className="front-bold m-3 w-full text-center">Create a Block</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">Title</label>
                    <input className="border rounded p-2 w-full" name="title" id="title"/>
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">Code</label>
                    <textarea className="border rounded p-2 w-full" name="code" id="code"/>
                </div>
                <button className="rounded p-2 bg-blue-300 hover:bg-blue-600" type="submit">Create</button>
            </div>
        </form>
    )
}