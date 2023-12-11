'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from "next/navigation";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { useState } from "react";


interface PostForm {
    title: string,
    content: string,
}

export default function NewPostPage() {
    const router = useRouter()
    const { register, control, handleSubmit } = useForm<PostForm>();

    const [error, setError] = useState('')
    // console.log(register('title'))

    return (
        <div className="max-w-xl">
            {error && <Alert variant="destructive" className="mb-5">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    {error}
                </AlertDescription>
            </Alert>}
            <form
                className="space-y-3"
                onSubmit={handleSubmit(async (data) => {
                    // console.log(data)
                    setError("An error occurred!")
                    try {
                        await axios.post('/api/post', data);
                        router.push('/post')
                    } catch (error) {
                        console.log(error)
                    }
                })}>
                <Input placeholder="Enter the title" {...register('title')} />
                <Controller name="content" control={control} render={({ field }) => <SimpleMDE placeholder="Enter the blog" {...field} />} />

                <Button>Submit</Button>
            </form>
        </div>

    )
}
