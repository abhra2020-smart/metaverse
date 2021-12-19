import Head from 'next/head'
import Login from '../components/Login'

import { useMoralis } from 'react-moralis'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <Login/>;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Metaverse</title>
      </Head>
      <button onClick={logout}>Log Out</button>
      
    </div>
  )
}
