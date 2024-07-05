import {  Eye, MessageSquare, MoveUp } from "lucide-react"
import { StudentPostType } from "../../../../dashboard/peer/peerTypes"
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar"
import { Card, CardContent } from "../../../ui/card"
import PostOption from "./postOption"
import { useNavigate } from "react-router"

type Props = {
    post: StudentPostType,
    header:boolean
}

const Post = ({ post,header}: Props) => {
    const navigate = useNavigate()
    return (
        <Card className="bg-white py-5">
            <CardContent>
                {/**header */}
               {
                 header &&   <div className="flex justify-between items-center">
                 <div className="flex gap-2 items-center">
                     <Avatar>
                         <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                         <AvatarFallback>CN</AvatarFallback>
                     </Avatar>
                     <div className="flex flex-col ">
                         <span className="text-[14px] font-[400] text-[#000000] leading-[21px]">
                             {post.name}
                         </span>
                         <span className="text-[10px] font-[400] text-[#808080] leading-[11px]">
                             {post.time}
                         </span>
                     </div>
                 </div>

                <PostOption/>
             </div>
               }
                {/**content */}
                <div className="flex flex-col mt-5">
                    <h6 className="md:text-[16px] text-[12px] font-[500] text-[#000000] leading-[24px] cursor-pointer"
                     onClick={()=>navigate(`post-description/${post.id}`,{replace:true})}>
                        {post.title}
                    </h6>
                    <p className="md:text-[14px] text-[11px] font-[300] text-[#000000] leading-[21px]">
                        {post.content}
                    </p>
                    {/**tag and reaction */}
                    <div className="flex justify-between items-center mt-7">
                        <div className=" flex gap-2">
                            {
                                post.tag.map((tag, index) => (
                                    <div key={index} className="bg-[#EAEAEA] text-[12px] p-2 rounded-lg text-[#808080] leading-4 font-[300]">
                                        {tag}
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex gap-2 text-[13px]  leading-[15px] text-[#808080] font-[300]">
                            <div className="flex gap-1 items-center">
                            <Eye className="w-[15px] h-[15px]"/>
                                {post.view}
                            </div>
                            <div className="flex gap-1 items-center">
                            <MessageSquare className="w-[15px] h-[15px]"/>
                                  {post.comment}
                            </div>
                            <div className="flex gap-1 items-center">
                            <MoveUp className="w-[15px] h-[15px]"/>
                                  {post.reaction}
                            </div>
                        </div>

                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Post