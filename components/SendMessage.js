import { useMoralis } from 'react-moralis'

export default function SendMessage() {
    const { user, Moralis } = useMoralis();
    
    return (
       <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 rounded-full items-center">
        <input className="flex-grow outline-none bg-transparent text-white border-2 border-blue-400 px-6 py-4 z-50 placeholder-gray-500 rounded-full px-4 py-2" placeholder={`Enter a message, ${user.getUsername()}...`} type="text"/>
        <button className="font-bold text-pink-500 px-4">Send</button>
       </form>
    );
}
