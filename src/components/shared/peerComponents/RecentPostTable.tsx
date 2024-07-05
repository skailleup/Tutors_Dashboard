import { MessageCircle, StickyNote } from "lucide-react"
import { RecentPostType } from "../../../dashboard/peer/peerTypes"
import { Button } from "../../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"



const RecentPostTable = ({ RecentPost }: RecentPostType) => {
    return (
        <Table className="w-full">
            <TableHeader>
                <TableRow className="border-0 ">
                    <TableHead className="md:w-[370px] text-center">Tittle</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead className="text-right">View All</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {RecentPost.map((post, index) => (
                    <TableRow key={index} className="w-full">
                            <TableCell className="font-medium flex gap-3 items-center">
                                <span>
                                    {post.type === "post" ? (
                                        <div className="w-[37px] h-[37px] bg-[#FFD9D9] rounded-lg flex justify-center items-center">
                                            <StickyNote className="w-5 h-5 text-[#ef8b8b]" />
                                        </div>
                                    ) : (
                                        <div className="w-[37px] h-[37px] bg-[#ffdd99] rounded-lg flex justify-center items-center">
                                            <MessageCircle className="w-5 h-5 text-[#D28B05] z-10" />
                                        </div>
                                    )}
                                </span>
                                {post.title}
                            </TableCell>
                            <TableCell>{post.submittedDate}</TableCell>
                            <TableCell>{post.amountOfCourses}</TableCell>
                            <TableCell className="text-right">
                                <Button>
                                    View
                                </Button>
                            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default RecentPostTable