import Input from '@/components/Input'
import Select from '@/components/Select'
import { KeyboardEvent, useState } from 'react'

const Search = () => {
  // 搜索类型
  const [searchType, setSearchType] = useState('baidu')
  // 搜索关键字
  const [searchKeyword, setSearchKeyword] = useState('')
  const selectChange = (value: string) => {
    console.log(`selected ${value}`)
    setSearchType(value)
  }
  const inputChange = (value: string) => {
    setSearchKeyword(value)
  }
  const search = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log(searchType, searchKeyword)
      switch (searchType) {
        case 'baidu':
          window.open(`https://www.baidu.com/s?wd=${searchKeyword}`)
          break
        case 'google':
          window.open(`https://www.google.com/search?q=${searchKeyword}`)
          break
      }
    }
  }

  return (
    <div className='flex flex-row justify-center items-center gap-2 p-4'>
      <Select
        value={searchType}
        onChange={selectChange}
        options={[
          { value: 'baidu', label: '百度' },
          { value: 'google', label: '谷歌' },
        ]}
      />
      <Input
        className='w-1/2'
        value={searchKeyword}
        onChange={inputChange}
        placeholder='请输入搜索的内容'
        onKeyDown={search}
      />
    </div>
  )
}

export default Search
