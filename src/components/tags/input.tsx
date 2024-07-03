import { Input } from "../ui/input"

type Props = {
 onChange?:(value:string)=>void,
 value?:string,
 placeholder:string,
 type:string
}
const InputField = ({onChange,value,placeholder,type}:Props) => {
  return (
    <Input onChange={(e) => onChange?.(e.target.value)}
     value={value} 
     placeholder={placeholder}
     type={type}/>
  )
}

export default InputField