import SelectButton from "../../../tags/selectButton"
import { ScrollArea, ScrollBar } from "../../../ui/scroll-area"
import ProgressCircleBar from "./StudentProgressChart"
import StudentTable from "./StudentTable"
import PieChart from "./studentPiechart"

const data = [
  { name: "date", value: "date" },
  { name: "time", value: "time" }
]
const studentData = [
  { name: "Student Name", region: "West Africa", post: 4, engagementAverage: "90%" },
  { name: "Student Name", region: "United States", post: 7, engagementAverage: "50%" },
  { name: "Student Name", region: "Peru", post: 7, engagementAverage: "78%" },
  { name: "Student Name", region: "West Africa", post: 3, engagementAverage: "88%" },
  { name: "Student Name", region: "West Africa", post: 4, engagementAverage: "73%" },
  { name: "Student Name", region: "West Africa", post: 0, engagementAverage: "39%" },
]
const StudentTab = () => {
  return (
    <div className="flex flex-col px-2 gap-5">
      <div className="w-full flex justify-between items-center">
        <h5 className="text-[20px] font-[600] leading-7 text-primary-blue">
          Students
        </h5>
        <div className="w-[80px]">
          <SelectButton placeholder="Sort by" data={data} />
        </div>
      </div>
      {/**Student table */}
      <ScrollArea className="w-full h-[450px]">
        <StudentTable studentData={studentData} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/**Chart */}
      <div className="w-full flex flex-col md:flex-row  mt-14 justify-center">

        {/**Regional Distribution of Students */}
        <div className="w-full lg:w-1/2 xl:w-[40%] flex flex-col">
          <h5 className="text-[20px] leading-7 font-[600] text-primary-blue">
            Regional Distribution of Students
          </h5>
           <PieChart/>
        </div>

        {/**Average Student Engagement */}
        <div className="w-full md:w-1/2 xl:w-[40%] flex flex-col gap-5">
          <h5 className="text-[20px] text-center leading-7 font-[600] text-primary-blue">
            Average Student Engagement
          </h5>
          <ProgressCircleBar/>
          <div className="flex flex-col gap-4 justify-center w-full text-center">
            <span className="text-[#333333] text-[16px] leading-[24px] font-[500]">Status:</span>
            <span className="text-[16px] leading-6 font-[400] text-[#828282]">Excellent</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default StudentTab