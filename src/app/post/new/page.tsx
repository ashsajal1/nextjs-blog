'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from "next/navigation";

interface PostForm {
    title: string,
    content: string,
}

export default function NewPostPage() {
    const router = useRouter()
    const { register, control, handleSubmit } = useForm<PostForm>();
    // console.log(register('title'))

    return (
        <form
            className="space-y-3 max-w-xl"
            onSubmit={handleSubmit(async(data) => {
                console.log(data)
                await axios.post('/api/post', data);
                router.push('/post')
            })}>
            <Input placeholder="Enter the title" {...register('title')} />
            <Controller name="content" control={control} render={({ field }) => <SimpleMDE placeholder="Enter the blog" {...field} />} />

            <Button>Submit</Button>
        </form>
    )
}
