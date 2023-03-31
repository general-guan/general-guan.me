import { KeyboardEvent } from 'react'

const Input = () => {
  const search = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log(123456)
    }
  }
  return <input type='text' placeholder='请输入' onKeyDown={search} />
}

export default Input
