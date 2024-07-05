import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import PostDescription from './PostDescription';
import { MessageCircleMore, UsersRound } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import BackButton from '../../../../components/shared/peerComponents/BackButton';
import PeerTabForum from './peerTabForum';
import PeerTabStudent from './peerTabStudent';


const PeerCourseRoute: React.FC = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const title = "Project Planning"
    const forumPath = `/dashboard/peer/courses`;
    const studentsPath = `${forumPath}/courseStudent`;
     return <div className="container flex flex-col py-7 bg-[#f7f7f8]">
        <h5 className="text-[18px] leading-[27px] font-[400] mb-7">{title}</h5>
        {/**Back button */}
        <BackButton title="Go to Course" />
        {/**Tabs section */}
        {/**tab button */}
        <div className="flex w-full justify-center items-center my-4">
            <div className={cn(`w-[200px] h-[34px] text-[#676767] flex gap-2 justify-center items-center cursor-pointer`, {
                "text-primary-blue border-b-[2px] border-primary-blue": pathname === forumPath
            })} onClick={() => navigate("")}>
                <MessageCircleMore className={cn(`w-6 h-6 text-[#676767]`, {
                    "text-primary-blue": pathname === forumPath
                })} />
                <span className="text-[16px] font-[500] leading-[24px]">Forum</span>
            </div>
            <div className={cn(`w-[200px] h-[34px] text-[#676767] flex gap-2 justify-center items-center cursor-pointer`, {
                "text-primary-blue border-b-[2px] border-primary-blue": pathname == studentsPath
            })} onClick={() => navigate("courseStudent")}>
                <UsersRound className={cn(`w-6 h-6 text-[#676767]`, {
                    "text-primary-blue": pathname === studentsPath
                })} />
                <span className="text-[16px] font-[500] leading-[24px]">Students</span>
            </div>
        </div>
        <Routes>
            <Route path='/' element={<PeerTabForum/>} />
            <Route path='/courseStudent' element={<PeerTabStudent/>}/>
            <Route path="/post-description/:id" element={<PostDescription />} />
        </Routes>
    </div>
};

export default PeerCourseRoute;