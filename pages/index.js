import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head><title>Home Page</title></Head>
      <nav>
        <ul>
          <Link href='/'><a >Home</a></Link>
          <Link href='/About'><a >About</a></Link>
        </ul>
      </nav>
      <h1>Hello world</h1>
      <Image src="https://media.istockphoto.com/photos/beautiful-emeraldcolored-glacial-rivers-of-iceland-taken-from-a-picture-id1202227531?s=612x612" width="500" height="300" alt='Image'></Image>

    </>
  )
}
