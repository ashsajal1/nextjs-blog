import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const postSchema = z.object({
  title: z.string().min(2).max(10),
  content: z.string().min(12).max(100),
  author: z.string(),
  authorId: z.number(),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = postSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const { title, content, author, authorId } = body;

  const newPost = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: author,
      authorId: authorId,
    },
  });

  return NextResponse.json(
    {
      newPost: newPost,
    },
    { status: 201 }
  );
}
