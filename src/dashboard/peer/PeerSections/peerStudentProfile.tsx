import { ArrowDownToLine, MessageCircleMore, Printer, UserRound } from "lucide-react"
import BackButton from "../../../components/shared/peerComponents/BackButton"
import { Label } from "../../../components/ui/label"
import ProgressCircleBar from "../../../components/shared/peerComponents/StudentTab/StudentProgressChart"
import { ScrollArea } from "../../../components/ui/scroll-area"
import Post from "../../../components/shared/peerComponents/Forumtab/Post"


const postData = [
  { name: "Golanginya", time: "5 mins ago", title: "How to patch KDE on FreeBSD?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["framework"], view: 125, comment: 15, reaction: 155 },
  { name: "Linuxoid", time: "22 mins ago", title: "What is a difference between Java nad JavaScript?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["java", "javascript"], view: 125, comment: 15, reaction: 155 },
  { name: "Jeffrey", time: "2 days ago", title: "is Expressjs a node framework", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["expressjs"], view: 125, comment: 15, reaction: 155 },
  { name: "Lola", time: "3 days ago", title: "I want to study Svelte JS Framework. What is the best resourse should I use?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["react", "angular", "vue"], view: 125, comment: 15, reaction: 155 },
]

const PeerStudentProfile: React.FC = () => {
  return (
    <div className="container flex flex-col py-7 bg-[#f7f7f8]">
      <BackButton title="Go to Peer-Support" />
      {/**Student detail section */}
      <div className="flex flex-col gap-5 mt-10">
        {/**Header */}
        <div className="flex justify-between gap-4">
          <h5 className="text-[20px] leading-[30px] font-[600] text-primary-blue">Student</h5>
          <div className="flex gap-3 items-center">
            <div className="p-2 bg-[#E1E1E1] rounded-lg">
              <MessageCircleMore className="text-[#565656] w-6 h-6 " />
            </div>
            <div className="p-2 bg-[#E1E1E1] rounded-lg">
              <ArrowDownToLine className="text-[#565656] w-6 h-6 " />
            </div>
            <div className="p-2 bg-[#E1E1E1] rounded-lg">
              <Printer className="text-[#565656] w-6 h-6 " />
            </div>
          </div>
        </div>

        {/**student information */}
        <div className="flex flex-col lg:flex-row justify-center md:justify-start mt-5 max-lg:gap-10">
          {/**left side */}
          <div className="flex flex-row gap-5 w-full lg:w-1/2">
            <div className="md:w-[162px] sm:w-[132px] sm:h-[132px] w-[100px] h-[100px]   md:h-[162px] bg-[#FFECE5] rounded-full flex justify-center items-center relative">
              <UserRound className="h-16 w-12 text-[#857474]" />
              <div className=" absolute bottom-1 right-5 bg-[#04802E] h-[20px] md:h-[30px] w-[20px] md:w-[30px] rounded-full  " />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <div className="flex flex-col gap-3">
                <Label htmlFor="student-name" className="text-[20px] leading-7 font-[500] text-[#000]">
                  Student Name
                </Label>
                <span className="text-[14px] leading-[21px] font-[400]">
                  Lorem dopsi ignam li fol soir sotlo fi lorem dopsi ignam li fol soir sotlo fi lorem dopsi ignam li fol soir sotlo fi
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Label htmlFor="student-name" className="text-[16px] leading-7 font-[500] text-[#532e2e]">
                  Gender:
                </Label>
                <span className="text-[14px] leading-3 font-[400] text-[#808080] capitalize">
                  Female
                </span>
              </div>

              <div className="flex gap-2 items-center" >
                <Label htmlFor="student-name" className="text-[16px] leading-7 font-[500] text-[#532e2e]">
                  Religion:
                </Label>
                <span className="text-[14px] leading-3 font-[400] text-[#808080] capitalize">
                  N/A
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Label htmlFor="student-name" className="text-[16px] leading-7 font-[500] text-[#532e2e]">
                  Language:
                </Label>
                <span className="text-[14px] leading-3 font-[400] text-[#808080] capitalize">
                  English
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Label htmlFor="student-name" className="text-[16px] leading-7 font-[500] text-[#532e2e]">
                  Date of birth:
                </Label>
                <span className="text-[14px] leading-3 font-[400] text-[#808080] capitalize">
                  31/01/1997
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Label htmlFor="student-name" className="text-[16px] leading-7 font-[500] text-[#532e2e]">
                  Region:
                </Label>
                <span className="text-[14px] leading-3 font-[400] text-[#808080] capitalize">
                  United States
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Label htmlFor="student-name" className="text-[16px] leading-7 font-[500] text-[#532e2e]">
                  Admitted
                </Label>
                <span className="text-[14px] leading-3 font-[400] text-[#808080] capitalize">
                  09/12/2024
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Label htmlFor="student-name" className="text-[16px] leading-7 font-[500] text-[#532e2e]">
                  Email:
                </Label>
                <span className="text-[14px] leading-3 font-[400] text-[#808080] capitalize">
                  sososo@skailleup.com
                </span>
              </div>


            </div>
          </div>

          {/**right side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center h-full ">
          <h5 className="text-[20px] text-center leading-7 font-[600] text-primary-blue">
            Average Student Engagement
          </h5>
              <ProgressCircleBar/>
          </div>

        </div>

         {/**Previous Post */}
        <div className=" w-full h-full">
          <h5 className="text-primary-blue text-[20px] leading-[30px] font-[500]">Previous Posts (4)</h5>
            <ScrollArea className="w-full h-[450px] mt-10 md:px-5">
                <div className="flex flex-col gap-5">
                  {
                    postData.map((post,index)=>(
                      <div key={index}>
                         <Post post={post} header={false}/>
                      </div>
                    ))
                  }
                </div>
            </ScrollArea>
        </div>
          

      </div>
    </div>
  )
}

export default PeerStudentProfile