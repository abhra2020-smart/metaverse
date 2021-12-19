import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

import { useMoralis } from 'react-moralis'

export default function Header() {
    const { user } = useMoralis();
    
    return (
        <div className="sticky z-50 top-0 p-5 bg-black text-pink-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="col-span-4 text-left lg:text-center items-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logoutOnPress />
                    </div>
                    <h1 className="text-3xl">Welcome to the Metaverse</h1>
                    <h2 className="text-xl">{user.getUsername()}</h2>
                </div>
                <ChangeUsername/>
            </div>
        </div>
    );
}
