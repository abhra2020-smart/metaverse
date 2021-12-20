import { useRef } from 'react'
import TimeAgo from 'timeago-react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'

import SendMessage from './SendMessage'
import Message from './Message'
import Avatar from './Avatar'

export default function Messages() {
    const { user } = useMoralis();
    const endOfMessagesRef = useRef(null);
    const { data, loading, error } = useMoralisQuery('Messages', (query) => query.ascending('createdAt').greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * 15),
    ), [], { live: true });

    console.log(data);
    
    return (
        <div className="pb-56">
            <ByMoralis style={{marginLeft: 'auto', marginRight: 'auto'}} variant="dark"/>

            <div className="space-y-10 p-4">
                {data.map((message) => {
                    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
                    return (
                    <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
                        <div className={`relative w-8 h-8 ${isUserMessage && "order-last ml-2"} `}>
                            <Avatar/>
                        </div>
                        <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? "rounded-br-none bg-pink-300" : "rounded-bl-none bg-blue-400"}`}>
                            <p>{message.get("message")}</p>
                        </div>
                        <TimeAgo className={`text-[10px] italic text-gray-400 ${isUserMessage && "order-first pr-1"}`} datetime={message.createdAt}/>
                        <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-pink-300" : "text-blue-400"}`}>{user.getUsername()}</p>
                    </div>)
                })}
            </div>
            <div ref={endOfMessagesRef} className="flex justify-center">
                <SendMessage endOfMessagesRef={endOfMessagesRef}/>
            </div>
            <div>
                <p className="text-center text-gray-400 mt-5">🎉🎉🎉 You're up-to-date {user.getUsername()}! 🎉🎉🎉</p>
            </div>


        </div>
    );
}
