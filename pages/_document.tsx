import { Html, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'
import { nanoid } from 'nanoid'

const fontURIs: string[] = [
  'https://fonts.googleapis.com/css?family=Alexandria&display=optional',
  'https://fonts.googleapis.com/css?family=Sriracha&display=optional',
  'https://fonts.googleapis.com/css?family=Sedgwick+Ave&display=optional',
  'https://fonts.googleapis.com/css?family=Oooh+Baby&display=optional',
  'https://fonts.googleapis.com/css?family=Grape+Nuts&display=optional',
  'https://fonts.googleapis.com/css?family=Didact+Gothic&display=optional',
]

export default function Document(): ReactElement {
  return (
    <Html lang='en'>
      <Head>
        {/* <script src='https://cdn.jsdelivr.net/npm/@tensorflow/tfjs' async></script>
        <script src='https://cdn.jsdelivr.net/npm/@tensorflow-models/speech-commands' async></script> */}
        {fontURIs.map((uri) => {
          return <link key={nanoid(6)} rel='stylesheet' href={uri}></link>
        })}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
