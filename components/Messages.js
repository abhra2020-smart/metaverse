import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'

import SendMessage from './SendMessage'

export default function Messages() {
    const { user } = useMoralis();
    
    return (
        <div className="pb-56">
            <ByMoralis style={{marginLeft: 'auto', marginRight: 'auto'}} variant="dark"/>

            <div></div>
            <div className="flex justify-center">
                <SendMessage/>
            </div>
            <div>
                <p className="text-center text-gray-400 mt-5">🎉🎉🎉 You're up-to-date {user.getUsername()}! 🎉🎉🎉</p>
            </div>


        </div>
    );
}
