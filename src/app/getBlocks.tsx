"use server"
import { db } from "./blocks/db";
export default async function getBlocks() {
    const blocks = await db.block.findMany();
    return blocks;
}