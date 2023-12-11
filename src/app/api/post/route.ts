import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const postSchema = z.object({
  title: z.string().min(2, "Title is required.").max(100),
  content: z.string().min(12, "Descripton is required.").max(1000),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = postSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const { title, content } = body;

  const newPost = await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });

  return NextResponse.json(
    {
      newPost: newPost,
    },
    { status: 201 }
  );
}
