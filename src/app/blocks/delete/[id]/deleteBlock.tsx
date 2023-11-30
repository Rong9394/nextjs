"use server"
import { redirect } from "next/navigation";
import { db } from "../../db";
export default async function(id:string) {
    await db.block.delete({where:{id: parseInt(id)}});
    redirect("/");
}