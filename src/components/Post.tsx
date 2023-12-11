'use client'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Share1Icon } from '@radix-ui/react-icons'
interface PostParams {title:string, author:string, publishedDate:Date, content:string | null}

export default function Post({title, author, publishedDate, content}:PostParams) {

    
    return (
        <div className='border rounded shadow mt-2'>
            <div>
                {/* <img className='rounded' src="https://picsum.photos/600/200" alt="" /> */}
                <div className='p-2'>
                    <h2 className='font-bold text-2xl'>{title}</h2>
                    <div className='flex items-center gap-2 text-xs'>
                        <p>{author}</p>
                        <p>{publishedDate.toDateString()}</p>
                        
                    </div>
                    <p className='text-sm'>{content?.slice(0, 50)}...</p>
                    <div className='mt-2 flex items-center gap-2'>
                        <Button>Read more</Button>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={'secondary'} size={'icon'}><Share1Icon /></Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>This is dialog content</DialogTitle>
                                    <DialogDescription>This is description!</DialogDescription>
                                </DialogHeader>

                                <DialogFooter>
                                    <Button type="submit">Save changes</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
            </div>
        </div>
    )
}
