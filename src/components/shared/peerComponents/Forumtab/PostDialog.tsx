import { Paperclip, Plus, Send } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTrigger } from "../../../ui/alert-dialog"
import SelectButton from "../../../tags/selectButton"
import InputField from "../../../tags/input"
import TextareaField from "../../../tags/TextareaField"
import { useRef } from "react"
import { Button } from "../../../ui/button"


const SelectData = [
    { name: "Light", value: "light" },
    { name: "Dark", value: "dark" },
    { name: "Random", value: "random" },
]

const PostDialog = () => {
    const uploadFile =  useRef<HTMLInputElement | null>(null)
    return (
        <AlertDialog>
            <AlertDialogTrigger className="flex gap-2 items-center">
                <Plus className=" w-[14px] h-[14px] text-primary-blue" />
                <span className="text-[16px] leading-[16px] text-primary-blue font-[400]">
                    Post
                </span>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogDescription className="w-full flex flex-col gap-5">
                        <SelectButton data={SelectData}
                            placeholder="Choose categories" />

                        <InputField type="text" placeholder="Type catching attention title" />
                        <TextareaField placeholder="Type your question" height="200" />

                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="w-full flex justify-between items-center">
                    <Button className="bg-[#D1D1D1] flex text-[12px] text-[#17181A] hover:bg-[#D1D1D1]" onClick={()=>uploadFile.current?.click()}>
                    <Paperclip className="text-[#000000] w-4 h-4 ml-1" />
                      Attachment
                    </Button>
                    <input type="file" ref={uploadFile} hidden/>
                    <div className="flex gap-2 items-center">
                        <AlertDialogCancel className="border-[2px] border-primary-blue">Discard</AlertDialogCancel>
                        <AlertDialogAction className="flex gap-2 bg-primary-blue">
                          <Send className="w-4 h-4 text-white"/>
                            Post
                        </AlertDialogAction>
                    </div>
                </div>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default PostDialog