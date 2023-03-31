import Input from '@/components/Input'
import Select from '@/components/Select'
import { useState } from 'react'

const Search = () => {
  const [searchType, setSearchType] = useState('baidu')
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
    setSearchType(value)
  }
  return (
    <div>
      <Select
        value={searchType}
        onChange={handleChange}
        options={[
          { value: 'baidu', label: '百度' },
          { value: 'google', label: '谷歌' },
        ]}
      />
      <Input />
    </div>
  )
}

export default Search
