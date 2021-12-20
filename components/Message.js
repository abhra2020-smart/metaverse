import { useMoralis } from 'react-moralis'

export default function Message({ key, message }) {
    const { user } = useMoralis();
    
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}
