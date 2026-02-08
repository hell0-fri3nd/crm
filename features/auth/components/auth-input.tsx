import { Input } from '@/components/ui/input'
import { AuthInputProps } from '../types'
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"


const AuthInput = ({label,type,placeholder,value,required,disabled,onChange, errorMessage}: AuthInputProps) => {
  return (

    <Field className="grid gap-2 w-full">
        <FieldLabel htmlFor={label}>{label}</FieldLabel >
        <Input 
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        />
        {errorMessage && <FieldDescription>{errorMessage}</FieldDescription>}
    </Field>
    
  )
}

export default AuthInput