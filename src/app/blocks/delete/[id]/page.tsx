
import { redirect } from "next/navigation";
import { db } from "../../db";
import { revalidatePath } from "next/cache";

export default async function BlockDeletePage(props:any) {
    const id = decodeURIComponent(props.params.id);
    await db.block.delete({where:{id: parseInt(id)}});
    revalidatePath('localhost:3000');
    redirect('/');
}

