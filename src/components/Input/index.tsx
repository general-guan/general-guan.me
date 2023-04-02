import { KeyboardEvent } from 'react'

const Input = ({
  value,
  placeholder,
  onChange,
  onKeyDown,
}: {
  value?: string
  placeholder?: string
  onChange?: (e: string) => void
  onKeyDown?: (e: KeyboardEvent) => void
}) => {
  return (
    <input
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={e => onChange && onChange(e.target.value)}
      onKeyDown={onKeyDown}
    />
  )
}

export default Input
