import { useState } from 'react';
import { useMoralis } from 'react-moralis'

export default function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend('Messages');
        const msgs = new Messages();

        msgs.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then((message) => {
            
        }, (error) => {
            console.log(error);
            alert("There was an error sending your message");
        });

        setMessage("");
        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    };
    
    return (
       <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 rounded-full items-center">
        <input className="flex-grow outline-none bg-transparent text-white border-2 border-blue-400 px-6 py-4 z-50 placeholder-gray-500 rounded-full px-4 py-2" onChange={(e) => setMessage(e.target.value)} value={message} placeholder={`Enter a message, ${user.getUsername()}...`} type="text"/>
        <button onClick={sendMessage} className="font-bold text-pink-500 px-4">Send</button>
       </form>
    );
}
