'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod'
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { useState } from "react";
import { postSchema } from "@/app/validationSchema";
import {z } from 'zod'

type PostForm = z.infer<typeof postSchema>;

export default function NewPostPage() {
    const router = useRouter()
    const { register, control, handleSubmit, formState: { errors } } = useForm<PostForm>({
        resolver: zodResolver(postSchema)
    });

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
                {errors.title && <p className="text-red-600">{errors.title.message}</p>}
                <Controller name="content" control={control} render={({ field }) => <SimpleMDE placeholder="Enter the blog" {...field} />} />
                {errors.content && <p className="text-red-600">{errors.content.message}</p> }
                <Button>Submit</Button>
            </form>
        </div>

    )
}
