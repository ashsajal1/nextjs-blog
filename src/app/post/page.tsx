import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function PostPage() {
  return (
    <div>
        <Button><Link href={'/post/new'}>New Post</Link></Button>
    </div>
  )
}
