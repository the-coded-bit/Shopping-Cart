import React from 'react'
import Head from 'next/head';

function Page({children, title, description}) {
  return (

    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </div>
  )
}

export default Page