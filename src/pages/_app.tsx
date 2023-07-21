import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Code_Pro } from 'next/font/google'
import Head from 'next/head'

const sourcecodepro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-sourcecodepro',
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className={`min-h-screen min-w-screen overflow-x-hidden flex flex-col ${sourcecodepro.variable} font-sans`}>
      <Head>
        <title>Rosebud AI X Palak Jain</title>
        <meta name="description" content="Rosebud AI X Palak Jain" />
        <meta property="og:title" content="Rosebud AI X Palak Jain" />
        <meta property="og:description" content="Rosebud AI X Palak Jain" />
        <meta property="og:type" content="website" />
      </Head>

      { children } 
    </div>
  )
}