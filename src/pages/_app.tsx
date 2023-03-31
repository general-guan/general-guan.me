import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Link href='/'>首页</Link>
      <Link href='/site-navigation'>网站导航</Link>
      <Component {...pageProps} />
    </>
  )
}
