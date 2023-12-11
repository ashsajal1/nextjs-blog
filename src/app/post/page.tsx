import Post from '@/components/Post'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

export default async function PostPage() {

  const post = await prisma.post.findMany()
  console.log(post)

  return (
    <div>
      {post.map(p=> (
        <Post key={p.id} title={p.title} author={p.author} publishedDate={p.createdAt} content={p.content} />
      ))}
      <Link href={'/post/new'}><Button>New Post</Button></Link>
    </div>
  )
}
