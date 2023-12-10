import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewPostPage() {
  return (
    <div className="space-y-3 max-w-xl">
        <Input placeholder="Enter the title"/>
        <Textarea placeholder="Enter the blog"/>
        <Button>Submit</Button>
    </div>
  )
}
