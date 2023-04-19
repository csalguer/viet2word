import { Html, Head, Main, NextScript } from 'next/document'
import type { ReactElement } from 'react'

export default function Document(): ReactElement {
  return (
    <Html lang='en'>
      <Head>
        <script src='https://cdn.jsdelivr.net/npm/@tensorflow/tfjs'></script>
        <script src='https://cdn.jsdelivr.net/npm/@tensorflow-models/speech-commands'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
