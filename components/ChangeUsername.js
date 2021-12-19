import { useMoralis } from 'react-moralis'

export default function ChangeUsername() {
    const { user, setUserData, userError, isUserUpdating } = useMoralis();
    const setUsername = () => {
        const username = prompt(`Enter your new username (current: ${user.getUsername()})`);
        if (!username) return;
        setUserData({
            username: username
        })
    };
    return (
        <div className="text-sm absolute top-5 right-5">
            <button disabled={isUserUpdating} onClick={setUsername} className="hover:text-pink-700">Change your username</button>
        </div>
    );
}
