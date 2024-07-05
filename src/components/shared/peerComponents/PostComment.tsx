import { ChevronsDown, ChevronsUp, CornerDownRight, ThumbsDown, ThumbsUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import { Card } from "../../ui/card"
import { Separator } from "../../ui/separator"
import PostOption from "./Forumtab/postOption"
import { useState } from "react"

type Props = {
    Comments: {
        id: string,
        name: string,
        commentContent: string,
        time: string,
        like: number,
        dislike: number,
        replies: {
            id: string,
            name: string,
            content: string
        }[]
    }

}

const PostComment = ({ Comments }: Props) => {
    const [ShowReplies, setShowReplies] = useState<{ [key: string]: boolean }>({})
    const toggleReply = (id: string) => {
        setShowReplies((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }
    return (
        <div className="flex flex-col gap-4">
            {/**comments */}
            <Card className="w-full rounded-none p-7  border-l-4 border-l-[#03CA76]">
                {/**Header */}
                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2 items-center">
                        <Avatar>
                            <AvatarImage />
                            <AvatarFallback>{Comments.name.charAt(1)}{Comments.name.charAt(2)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col ">
                            <span className="text-[14px] font-[400] text-[#000000] leading-[21px]">
                                {Comments.name}
                            </span>
                            <span className="text-[10px] font-[400] text-[#808080] leading-[11px]">
                                {Comments.time}
                            </span>
                        </div>
                    </div>
                    <PostOption />
                </div>
                {/**content */}
                <p className="text-[14px] font-[300] py-4">
                    {Comments.commentContent}
                </p>
                <Separator />
                <div className="w-full flex justify-between items-center mt-4">
                    {/**Likes and dislikes */}
                    <div className="flex gap-2">
                        <span className="flex items-center gap-1 text-[#808080] text-[12px] font-[300] leading-[14px]">
                            <ThumbsUp className="w-[14px] h-[14px]" />
                            {Comments.like}
                        </span>
                        <span className="flex items-center gap-1  text-[#808080] text-[12px] font-[300] leading-[14px]">
                            <ThumbsDown className="w-[14px] h-[14px]" />
                            {Comments.dislike}
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <span className="flex gap-2 text-[#1682FD] items-center text-[12px] font-[300] cursor-pointer" onClick={() => toggleReply(Comments.id)}>
                                {
                                    ShowReplies[Comments.id] ? (
                                        <span className="flex items-center">
                                            <ChevronsUp className="w-[18px] h-[18px]" />
                                            Hide ({Comments.replies.length})

                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            <ChevronsDown className="w-[18px] h-[18px]" />
                                            Show ({Comments.replies.length})
                                        </span>
                                    )
                                }
                            </span>
                        </div>
                        <span className="flex gap-2 text-[#1682FD] items-center text-[12px] font-[300] cursor-pointer">
                            <CornerDownRight className="w-[14px] h-[14px]" />
                            Reply
                        </span>
                    </div>
                </div>
            </Card>

            {/*reples to commentx */}
            {
                ShowReplies[Comments.id] && (
                    Comments.replies.length > 0 && (
                        Comments.replies.map((reply, index) => (
                            <Card className="w-full rounded-none p-7  border-l-8 border-l-[#2B3677]" key={index}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-1 text-[14px] font-[500] leading-[21px]">
                                        {Comments.name}
                                        <p className="font-[300]">{reply.content}</p>
                                    </div>
                                    <Separator />
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#808080] text-[14px] font-[500] leading-[21px]">
                                            {reply.name}
                                        </span>
                                        
                                        <span className="flex gap-2 text-[#1682FD] items-center text-[12px] font-[300] cursor-pointer">
                                            <CornerDownRight className="w-[14px] h-[14px]" />
                                            Reply
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        ))
                    )
                )
            }
        </div>
    )
}

export default PostComment