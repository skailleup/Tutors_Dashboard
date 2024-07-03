import { EllipsisVertical } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover"


const PostOption = () => {
    return (
        <Popover>
            <PopoverTrigger>
            <EllipsisVertical className="w-6 h-6 text-[#808080]" />
            </PopoverTrigger>
            <PopoverContent className="w-fit">select option.</PopoverContent>
        </Popover>
    )
}

export default PostOption