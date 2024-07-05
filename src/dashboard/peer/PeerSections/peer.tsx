import BackButton from "../../../components/shared/peerComponents/BackButton"
import PeerCourseCard from "../../../components/shared/peerComponents/PeerCourseCard"
import RecentPostTable from "../../../components/shared/peerComponents/RecentPostTable"
import { ScrollArea, ScrollBar } from "../../../components/ui/scroll-area"



const courses = [
    { title: "Crafting Engaging Virtual Experiences", totalLearner: 46 },
    { title: "Project Planning", totalLearner: 23 },
    { title: "Project Managing", totalLearner: 11 },
    { title: "User Interface Design", totalLearner: 36 }
]

const RecentPosts = [
    {title:"Submission of Design Principles Assignment",submittedDate:"Jan 1st, 2024",amountOfCourses:3,type:"post"},
    {title:"Discussion Posted in Design Principles of Everyday Life",submittedDate:"Jan 1st, 2024",amountOfCourses:3,type:"message"},
    {title:"Submission of Mobile Programming Assignment",submittedDate:"Jan 1st, 2024",amountOfCourses:2,type:"post"},
    {title:"Submission Prototyping Assignment",submittedDate:"Jan 1st, 2024",amountOfCourses:2,type:"post"},
    {title:"Submission Prototyping Assignment",submittedDate:"Jan 1st, 2024",amountOfCourses:1,type:"message"},
    {title:"Submission of Design Principles Assignment",submittedDate:"Jan 1st, 2024",amountOfCourses:3,type:"post"},
]

const PeerMain: React.FC = () => {
    return (
        <div className="container flex flex-col py-7 bg-[#f7f7f8] w-full">
            {/**Back button */}
            <BackButton title="Go to Dashboard"/>
            <div className="flex flex-col mt-8 gap-4 w-full">
                <h5 className="text-[20px] font-[600] leading-5">
                    My Courses
                </h5>
                {/**Course Card */}
                <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-5">
                    {
                        courses.map((course) => (
                            <PeerCourseCard title={course.title}
                                totoalLearner={course.totalLearner} />
                        ))
                    }
                </div>
                {/**Recent Post */}
                <div className="flex flex-col gap-5 py-9 w-full">
                    <h4 className="text-[20px] leading-[30px] font-[600] text-primary-blue">Recent Posts</h4>
                    <ScrollArea className="h-[400px] w-full">
                       <RecentPostTable RecentPost={RecentPosts}/>
                       <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default PeerMain