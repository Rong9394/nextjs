"use server";
import { redirect } from "next/navigation";
import { db } from "../../db";

export default async function editBlock(id: string, title:string, code:string) {

    await db.block.update({
        where:{
            id: parseInt(id)
        },
        data:{
            title: title,
            code: code
        }
    });

    redirect("/");
}