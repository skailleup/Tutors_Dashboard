import { UserRound } from "lucide-react"
import { courseType } from "../../../dashboard/peer/peerTypes"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../ui/card"
import { Button } from "../../ui/button"
import { useNavigate } from "react-router"


const PeerCourseCard = ({ title, totoalLearner }: courseType) => {
    const navigate = useNavigate()
    return (
        <Card className="w-[217px] h-[292px]">
            <div className="w-full h-fit">
                <CardHeader className="h-[46px] mb-8">
                    <CardTitle className="text-[14px] font-medium leading-[21px] text-[#120303]">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="w-full flex flex-col justify-center items-center h-full gap-2">
                    <UserRound className="w-[39px] h-[39px] text-primary-blue" />
                    <span className="text-[18px] font-[400] leading-[27px] text-primary-blue">
                        Total Learners
                    </span>
                    <h2 className="text-[28px] font-bold leading-10 text-primary-blue">
                        {totoalLearner} Learners
                    </h2>
                </CardContent>
                <CardFooter className="w-full flex justify-center items-center h-full">
                    <Button className="text-[14px] font-[600] leading-5 bg-primary-blue" onClick={()=>navigate(`courses`)} >
                        View
                    </Button>
                </CardFooter>
            </div>
        </Card>
    )
}

export default PeerCourseCard