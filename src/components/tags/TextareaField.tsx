import { Textarea } from "../ui/textarea"

type Props = {
    placeholder: string,
    onChange?: (value: string) => void,
    value?: string,
    height: string
}

const TextareaField = ({ placeholder, onChange, value, height }: Props) => {
    return (
        <Textarea placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
            value={value}
            className={`h-[${height}px]`} />
    )
}

export default TextareaField