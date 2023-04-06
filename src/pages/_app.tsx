import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={inter.className}>
        <div className='shadow-md py-4 px-6 flex flex-row gap-4'>
          <Link href='/'>首页</Link>
          <Link href='/site-navigation'>网站导航</Link>
        </div>

        <Component {...pageProps} />
      </main>
    </>
  )
}
