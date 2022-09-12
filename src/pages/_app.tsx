import type { AppProps } from "next/app"
import Head from "next/head"
import "../../styles/brands.css"
import "../../styles/globals.css"

function LinkShowcase({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nate Broughton - Links</title>
        <meta
          name="description"
          content="Nate is a computer science student & IT professional, check out his socials and website here!"
        />
        <meta name="author" content="Nate Broughton" />
        <meta property="og:title" content="Nate Broughton" />
        <meta
          property="og:description"
          content="Nate is a computer science student & IT professional, check out his socials and website here!"
        />
        <meta property="og:image" content="/nate-pfp.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://links.nathaniel.pro" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default LinkShowcase
