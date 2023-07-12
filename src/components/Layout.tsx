import Head from 'next/head'
import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

export const Layout: FC<LayoutProps> = ({
  children,
  title = 'This is the default title'
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'>
          Home
        </Link>{' '}
        |{' '}
        <Link href='/about'>
          About
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
)
