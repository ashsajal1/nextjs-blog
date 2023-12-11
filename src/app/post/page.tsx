import { Button } from '@/components/ui/button'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'

export default async function PostPage() {

  const post = await axios.get('/api/post');
  console.log(post)

  return (
    <div>
        <Button><Link href={'/post/new'}>New Post</Link></Button>
    </div>
  )
}
