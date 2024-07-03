import { Cast, ChevronDown, CircleCheckBig, Clock2, Flame, Link, MoveUpRight, Plus, Star } from "lucide-react"
import PostDialog from "./PostDialog"
import { ScrollArea } from "../../../ui/scroll-area"
import Post from "./Post"
import { Card, CardContent } from "../../../ui/card"
import { Separator } from "../../../ui/separator"
import { useState } from "react"
import { postData } from "../../../../dashboard/peer/peerTypes"


const header = [
  { title: "new", icon: <Clock2 className="w-3 h-3" /> },
  { title: "top", icon: <Flame className="w-3 h-3" /> },
  { title: "closed", icon: <CircleCheckBig className="w-3 h-3" /> },
  { title: "Your Posts", icon: <MoveUpRight className="w-3 h-3" /> },
]


const ForumTab = () => {
  const [showActivity, setShowActivity] = useState(true)
  return (
    <div className="flex flex-col-reverse lg:flex-row md:px-2 gap-5">

      {/**Left side */}
      <div className="w-full lg:w-[70%] flex flex-col">
        {/**header */}
        <div className="w-full flex justify-between">
          <div className="flex gap-3">
            {
              header.map((item, index) => (
                <div key={index} className="flex gap-1 items-center p-2 rounded-full bg-[#EAEAEA]">
                  {item.icon}
                  <span className="text-[12px] leading-[18px] font-[300]">
                    {item.title}
                  </span>
                </div>
              ))
            }
          </div>
          <PostDialog />
        </div>

        <ScrollArea className="h-[420px] mt-10 md:px-5">
          <div className="flex flex-col gap-5">
            {
              postData.map((post) => (
                <Post post={post} header={true} />
              ))
            }
          </div>
        </ScrollArea>

      </div>

      {/**right side */}
      <div className="w-full lg:w-[30%] flex flex-col">
        {/**must read and feature links */}
        <div>
          <Card className="py-5">
            <CardContent className="w-full flex flex-col">
              {/**must read report */}
              <div>
                <div className="w-full flex justify-between items-center mb-3">
                  <div className="flex gap-2 text-[14px] text-[#000000] font-[400] leading-[21px] items-center">
                    <Star className="w-[20px] h-[18px] text-[#808080]" />
                    Must-read posts
                  </div>
                  <Plus className="h-[14px] w-[16px] text-[#000E5C]" />
                </div>
                <Separator />
                <div className="flex flex-col mt-4">
                  <ul className="text-[12px] flex flex-col gap-2 font-[400] leading-[18px] text-[#1682FD]">
                    <li>
                      Please read rules before you start working on a platform
                    </li>
                    <li>
                      Vision & Strategy of Alemhelp
                    </li>
                  </ul>
                </div>
              </div>

              {/**Featured Link */}
              <div className="mt-5">
                <div className="w-full flex justify-between items-center mb-3">
                  <div className="flex gap-2 text-[14px] text-[#000000] font-[400] leading-[21px] items-center">
                    <Link className="w-[20px] h-[18px] text-[#808080]" />
                    Featured links
                  </div>
                  <Plus className="h-[14px] w-[16px] text-[#000E5C]" />
                </div>
              </div>
              <Separator />
              <div className="flex flex-col mt-4">
                <ul className="text-[12px] flex flex-col gap-2 font-[400] leading-[18px] text-[#1682FD]">
                  <li>
                    Alemhelp source-code on GitHub
                  </li>
                  <li>
                    Golang best-practices
                  </li>
                  <li>
                    Alem.School dashboard
                  </li>
                </ul>
              </div>

            </CardContent>
          </Card>
        </div>


        {/**Activity*/}
        <div className="mt-6">
          <div className="w-full flex justify-between items-center">
            <h5 className="text-[20px] font-[500] leading-[30px] text-[#000000]">
              Activity
            </h5>
            <ChevronDown className="w-6 h-6 text-[#000E5C]" onClick={() => setShowActivity(!showActivity)} />
          </div>
          {
            showActivity && <Card className="py-5">
              <CardContent className="">
                <p className="text-[12px] leading-[21px] font-[400] text-[#000000]">
                  Design Thinking/The Areas of  UX Design
                </p>
                <div className="flex gap-2 items-center my-3">
                  <Cast className="w-5 h-4 text-[#2B3677]" />
                  <span className="text-[14px] leading-[21px] font-[400]">
                    Lecture
                  </span>
                </div>
                <div className="flex justify-between items-center text-[13px] text-[#808080] font-[300] leading-[21px]">
                  <span>
                    11/11/2023
                  </span>
                  <span>
                    10:00 AM (WAT)
                  </span>
                </div>
              </CardContent>
            </Card>
          }
        </div>

      </div>


    </div>
  )
}

export default ForumTab