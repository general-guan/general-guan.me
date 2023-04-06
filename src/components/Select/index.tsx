interface SelectProps {
  defaultValue?: string
  value?: string
  options: { value: string; label: string }[]
  onChange?: (val: string) => void
}

const Select: React.FC<SelectProps> = ({ defaultValue, value, options, onChange }) => {
  return (
    <select
      className='py-2 px-4 border-[1px] outline-none rounded-md'
      defaultValue={defaultValue}
      value={value}
      onChange={e => {
        onChange && onChange(e.target.value)
      }}
    >
      {options.map((m, i) => (
        <option value={m.value} key={i}>
          {m.label}
        </option>
      ))}
    </select>
  )
}

export default Select
