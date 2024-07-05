import { Cast, Users,} from "lucide-react"
import { Card } from "../../ui/card"

type Props = {
    Event:{
        title:string,
        time:string,
        type:string,
        date:string
    }
}

const EventCard = ({Event}:Props) => {
  return (
    <Card className="p-4 w-full flex flex-col gap-4  bg-white">
       <h5 className="text-[14px] font-[400] leading-[21px]">{Event.title}</h5>
       <div className="flex gap-2 text-primary-blue text-[14px] font-[300] leading-5">
          {Event.type === "Meeting" ? (
            <Users className="w-6 h-6 text-primary-blue"/>
          ):(
            <Cast className="w-6 h-6 text-primary-blue"/>
          )}
          {Event.type}
       </div>
       <div className="flex justify-between items-center text-[#808080] text-[14px] font-[300] leading-5">
        <span>{Event.date}</span>
        <span>{Event.time}</span>
       </div>
    </Card>
  )
}

export default EventCard