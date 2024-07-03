import BackButton from "../../components/shared/peerComponents/BackButton";
import { Card } from "../../components/ui/card";
import cardImage1 from "../../assets/images/undraw_video_streaming_re_v3qg 1.png"
import { Label } from "../../components/ui/label";
import SelectButton from "../../components/tags/selectButton";
import InputField from "../../components/tags/input";
import { Button } from "../../components/ui/button";
import cardImage2 from '../../assets/images/Schedule Calendar 1.png';
import Reminder from "../../components/shared/LiveClassComponents/Reminder";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { EventData } from "./LiveClass";
import EventCard from "../../components/shared/LiveClassComponents/EventCard";

const LiveClass: React.FC = () => {
  const course = [
    { name: "course1", value: "course1" },
    { name: "course2", value: "course2" },
    { name: "course3", value: "course3" }
  ]
  const [ShowEvent, setShowEvent] = useState(true)
  const toggleEvent = ()=>{
    setShowEvent(!ShowEvent)
  }

  return <div className="container flex flex-col py-7 bg-[#f7f7f8] w-full">
    <BackButton title="Back to Dashbard" />
    <div className="flex flex-col lg:flex-row w-full h-full gap-5">

      {/**Left */}
      <div className="lg:w-[70%] w-full py-5 flex flex-col gap-7">
        {/**Header */}
        <div className="flex flex-col gap-4">
          <h5 className="text-[18px] md:text-[24px] font-[600] leading-[36px]">Host Your Live Classes Here! </h5>
          <p className="text-[16px] leading-6 font-[400] w-full md:w-[500px]">
            This is your dedicated space to engage and interact with your students in real-time sessions through Youtube streaming.
          </p>
        </div>

        {/**Live */}
        <Card className="w-full grid sm:grid-cols-2 p-7 gap-10 md:gap-4">
          <div className="w-full">
            <h6 className="text-[24px] leading-9 font-[500]">Create a live class now.</h6>
            <p className="w-full text-[16px] font-[400] leading-6 mt-5">
              Begin a spontaneous live session with your students instantly through YouTube.
            </p>

            <div className="w-full mt-7 flex justify-center">
              <img src={cardImage1} className=" object-contain" width={175} height={141} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="w-[150px] flex flex-col gap-3">
              <Label htmlFor="select-course" className="text-[16px] font-[500] leading-6">
                Select Course
              </Label>
              <SelectButton placeholder="course" data={course} />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="select-course" className="text-[16px] font-[500] leading-6">
                Event Title
              </Label>
              <InputField type="text" placeholder="Live Lecture on Product Design Management" />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="select-course" className="text-[16px] font-[500] leading-6">
                Youtube Live Stream Link
              </Label>
              <InputField type="text" placeholder="Link" />
            </div>
            <div className="w-full flex justify-end">
              <Button className="bg-primary-blue w-[120px] text-white hover:bg-primary-blue">
                Stream now
              </Button>
            </div>
          </div>
        </Card>

        {/**Schedule a  */}
        <Card className="w-full grid sm:grid-cols-2 p-7 gap-10 md:gap-4">
          <div className="w-full">
            <h6 className="text-[24px] leading-9 font-[500]">Schedule a live class for later.</h6>
            <p className="w-full text-[16px] font-[400] leading-6 mt-5">
              Plan ahead and schedule a live session with your students for a future date and time.
            </p>

            <div className="w-full mt-14 flex justify-center">
              <img src={cardImage2} className=" object-contain" width={175} height={141} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="w-[150px] flex flex-col gap-2">
              <Label htmlFor="select-course" className="text-[16px] font-[500] leading-6">
                Select Course
              </Label>
              <SelectButton placeholder="course" data={course} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="select-course" className="text-[16px] font-[500] leading-6">
                Event Title
              </Label>
              <InputField type="text" placeholder="Live Lecture on Product Design Management" />
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="select-course" className="text-[16px] font-[500] leading-6">
                  Date
                </Label>
                <InputField type="text" placeholder="31/01/2024" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="select-course" className="text-[16px] font-[500] leading-6">
                  Time (EDT)
                </Label>
                <InputField type="text" placeholder="08:00 AM" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="select-course" className="text-[16px] font-[500] leading-6">
                Youtube Live Stream Link
              </Label>
              <InputField type="text" placeholder="Link" />
            </div>
            <div className="w-full flex justify-end">
              <Button className="bg-primary-blue w-[140px] text-white hover:bg-primary-blue">
                Schedule for Later
              </Button>
            </div>
          </div>
        </Card>

      </div>

      {/**Right */}
      <div className="w-full lg:w-[30%]  py-5 flex flex-col gap-5">
        <h6 className="text-[16px] leading-6 font-[400] text-[#565656]">You have upcoming events.</h6>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-7">
          {/** Reminder*/}
          <div className="flex flex-col gap-4">
            <h6 className="text-[20px] leading-5 font-[500] text-[#000000]" >Reminders</h6>
            <Reminder />
          </div>
          {/**Event */}
          <div className="flex flex-col gap-4 ">
               <div className="w-full flex justify-between items-center ">
               <h6 className="text-[20px] leading-5 font-[500] text-[#000000]" >Events</h6>
                 {
                  ShowEvent ? (
                    <ChevronDown className="w-6 h-6 text-[#000000]" onClick={toggleEvent}/>
                  ):(
                    <ChevronUp className="w-6 h-6 text-[#000000]" onClick={toggleEvent} />
                  )
                 }
               </div>

                {
                  ShowEvent &&<div className="flex flex-col gap-5 w-full">
                  {
                   EventData.map((event)=>(
                     <EventCard Event={event}/>
                   ))
                  }
               </div>
                }
               
          </div>
        </div>
      </div>

    </div>
  </div>;
};

export default LiveClass;
