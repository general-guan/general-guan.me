import { KeyboardEvent } from 'react'

interface InputProps {
  value?: string
  placeholder?: string
  onChange?: (e: string) => void
  onKeyDown?: (e: KeyboardEvent) => void
  className?: string
}

const Input: React.FC<InputProps> = ({ value, placeholder, onChange, onKeyDown, className = '' }) => {
  return (
    <input
      className={`${className} py-2 border-[1px] outline-none px-4 rounded-md `}
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={e => onChange && onChange(e.target.value)}
      onKeyDown={onKeyDown}
    />
  )
}

export default Input
