import Head from 'next/head'
import type { ReactElement } from 'react'
import SideNavBar from '@/features/navigation'
import PermissionsProvider from '@/features/permissions'
import Widget from '@/features/widget'
import { TRANSCRIPTION } from '@/features/widget/index'

export default function Index(): ReactElement {
  return (
    <>
      <Head>
        <title>Vietnamese Language Tools</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideNavBar>
        <PermissionsProvider>
          <Widget type={TRANSCRIPTION} />
        </PermissionsProvider>
      </SideNavBar>
    </>
  )
}