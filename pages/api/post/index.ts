import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
//import { getServerSession } from "next-auth";

export default async function handle (req, res) {
    const { title, content } = req.body;
    const session = await getSession( {req} );
   
    console.log("Session:", session);
    console.log("User Email:", session?.user?.email);

    const result = await prisma.post.create({
        data: {
            title: title,
            content: content,
            author: { connect: { email: session?.user?.email } }
        },
    });
    res.json(result);
}