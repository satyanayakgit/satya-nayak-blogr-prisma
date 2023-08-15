import prisma from "../../../lib/prisma";

//DELETE /api/post/:id
export default async function handle( req, res ) {
    const postId = req.query.id;
}