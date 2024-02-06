import { Html, Head, Main, NextScript } from 'next/document'
import type { ReactElement } from 'react'
import FontStylesheets from './fonts'

export default function Document(): ReactElement {
  return (
    <Html lang='en'>
      <Head>
        <script src='https://cdn.jsdelivr.net/npm/@tensorflow/tfjs'></script>
        <script src='https://cdn.jsdelivr.net/npm/@tensorflow-models/speech-commands'></script>
        <FontStylesheets />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
