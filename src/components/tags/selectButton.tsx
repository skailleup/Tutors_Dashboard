import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type Props = {
    onChange?: (value:string) => void,
    value?: string,
    data: {
        name: string,
        value: string
    }[],
    placeholder: string
}

const SelectButton = ({ onChange, value, data, placeholder }: Props) => {
    return (
        <Select  onValueChange={onChange} value={value} >
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {
                    data.map((select,index) => (
                        <SelectItem value={select.value} key={index}>
                            {select.name}
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}

export default SelectButton