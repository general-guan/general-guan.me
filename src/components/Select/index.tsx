const Select = ({
  defaultValue,
  value,
  options,
  onChange,
}: {
  defaultValue?: string
  value?: string
  options: { value: string; label: string }[]
  onChange?: (val: string) => void
}) => {
  return (
    <select
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
