import { Plus} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../ui/table"
import { Button } from "../../../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar"
import { useNavigate } from "react-router"

type Props = {
    studentData: {
        name: string,
        region: string,
        post: number,
        engagementAverage: string
    }[]
}

const StudentTable = ({ studentData }: Props) => {
    const navigate = useNavigate()
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[250px]">Name</TableHead>
                    <TableHead >Region</TableHead>
                    <TableHead>Post</TableHead>
                    <TableHead className="text-center">Engagement Average</TableHead>
                    <TableHead className="flex justify-end">
                        <div className="flex gap-2 items-center">
                            <Plus className="text-primary-blue w-6 h-6" />
                            <span className="text-[16px] leading-6 font-[400] text-primary-blue">Create Group</span>
                        </div>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {studentData.map((student, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">
                            <div className="flex gap-3 items-center">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                {student.name}
                            </div>
                        </TableCell>
                        <TableCell>{student.region}</TableCell>
                        <TableCell>{student.post}</TableCell>
                        <TableCell className="text-center">{student.engagementAverage}</TableCell>
                        <TableCell className="text-right">
                            <Button className="text-[14px] leading-[20px] font-[600] text-white bg-primary-blue" onClick={()=>navigate("/dashboard/peer/student-profile",{replace:true})}>
                                Profile
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default StudentTable