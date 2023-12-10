'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function NewPostPage() {
  return (
    <div className="space-y-3 max-w-xl">
        <Input placeholder="Enter the title"/>
        <SimpleMDE placeholder="Enter the blog"/>
        <Button>Submit</Button>
    </div>
  )
}
