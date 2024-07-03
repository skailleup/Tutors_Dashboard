import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router";

type Props ={
    title:string
}

const BackButton = ({title}:Props) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
      navigate(-1); // Go back to the previous route
    };
  
    return <div className="flex gap-2 cursor-pointer">
        <ChevronLeft className='w-6 h-6 text-[#000000]'  onClick={handleBackClick}/>
        <span className='text-[16px] font-medium leading-6 text-[#17181A]'>{title}</span>
    </div>
}

export default BackButton