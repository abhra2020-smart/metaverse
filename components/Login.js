import Head from 'next/head'
import Image from 'next/image'

import { useMoralis } from 'react-moralis'

export default function Login() {
    const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <button onClick={authenticate} className="bg-sky-500 rounded-lg p-5 font-bold animate-pulse">Login to the Metaverse</button>
      </div>
      <div className="w-fill h-screen">
        <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
      </div>
    </div>
  )
}
