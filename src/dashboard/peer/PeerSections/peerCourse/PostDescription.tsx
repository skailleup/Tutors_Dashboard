import { useParams } from "react-router"
import { PostComments, postData } from "../../peerTypes"
import { Card } from "../../../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar"
import PostOption from "../../../../components/shared/peerComponents/Forumtab/postOption"
import { MessageSquareMore, MoveUp } from "lucide-react"
import InputField from "../../../../components/tags/input"
import { Button } from "../../../../components/ui/button"
import PostComment from "../../../../components/shared/peerComponents/PostComment"


const PostDescription = () => {
  const { id } = useParams()
  const postDetail = postData.find((post) => post.id === id)
  return (
    <div className="flex flex-col justify-center w-full">
      {/**Main content */}
      <Card className="w-full h-full bg-white p-7">
        {/**Header */}
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ">
              <span className="text-[14px] font-[400] text-[#000000] leading-[21px]">
                {postDetail?.name}
              </span>
              <span className="text-[10px] font-[400] text-[#808080] leading-[11px]">
                {postDetail?.time}
              </span>
            </div>
          </div>

          <PostOption />
        </div>

        <div className="flex flex-col gap-4 w-full mt-7">
          <h5 className="text-[17px] md:text-[20px] font-[600] leading-[30px]">{postDetail?.title}</h5>
          <p className="text-[14px] md:text-[16px] font-[400] leading-6">
            Mi magna sed nec nisl mattis. Magna cursus tincidunt rhoncus imperdiet fermentum pretium, pharetra nisl. Euismod.
          </p>

          <div className="w-full flex flex-col justify-center items-center">
            <div className="bg-[#EAEAEA] w-full md:w-[400px] p-[10px] text-[14px] font-[400]">
              <ol>
                <li>Page main</li>
                <li></li>
                <li>import "fmt"</li>
                <li>func main()</li>
                <li> fmt.Println(“Hello, world!”)</li>
              </ol>
            </div>
          </div>

          <p className="text-[14px] md:text-[16px] font-[400] leading-6">
            {postDetail?.content}
          </p>

          <div className="flex justify-between w-full items-center">
            <div className="flex gap-2">
              {
                postDetail?.tag.map((tag, index) => (
                  <div key={index} className="bg-[#EAEAEA] text-[12px] p-2 rounded-lg text-[#808080] leading-4 font-[300]">
                    {tag}
                  </div>
                ))
              }
            </div>
            <div className="flex gap-1 items-center rounded-lg p-2 justify-center bg-[#03CA76] text-[16px] text-white leading-5">
              <MoveUp className=" w-4 h-4 text-white" />
              Vote
            </div>
          </div>

        </div>
      </Card>
            
            {/**Replies */}
            <p className="text-[#808080] text-[18px] font-[500] leading-[27px] text-center py-5">
              Replies
            </p>

            {/**replies form */}
            <Card className="w-full rounded-none bg-white p-7">
               <InputField type="text" placeholder="type your comment here"/>
               <div className="flex gap-3 justify-end items-center mt-3">
                   <Button className="bg-[#CCCCCC] text-[#676767] text-[14px] font-[600] leading-[20px]">
                      Cancel
                   </Button>
                   <Button className="flex gap-2 items-center text-[14px] font-[600] leading-[20px] text-white bg-primary-blue">
                   <MessageSquareMore className="w-4 h-4 text-white" />
                       Comment
                   </Button>
               </div>
            </Card>

            {/**Comment */}
            <div className="flex flex-col gap-4 py-8">
               {
                PostComments.map((comment)=>(
                  <PostComment Comments={comment}/>
                ))
               }
            </div>

    </div>
  )
}

export default PostDescription