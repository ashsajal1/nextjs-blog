import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { postSchema } from "../../validationSchema";

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

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json({
    posts:posts
  } ,{
    status: 200
  })
}
