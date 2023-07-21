import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Code_Pro } from 'next/font/google'
import Head from 'next/head'

const sourcecodepro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-sourcecodepro',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className={`min-h-screen min-w-screen overflow-x-hidden universalPadding flex flex-col ${sourcecodepro.variable} font-sans`}>
      <Head>
        <title>Rosebud AI x Palak Jain</title>
        <meta name="description" content="Rosebud AI x Palak Jain" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta property="og:title" content="Rosebud AI x Palak Jain" />
        <meta property="og:description" content="Rosebud AI x Palak Jain" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://rosebud-x-palak.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      { children } 
    </div>
  )
}