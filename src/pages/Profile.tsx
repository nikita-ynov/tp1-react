import { useLocation } from 'react-router-dom';
import { users } from '../assets/users.json';

export default function Profile() {
    const { id } = useLocation().state;

    const user = id
        ? users.find(user => user.id === Number(id))
        : null;

    function showData(data: any) {
        if (!data) return null;

        return Object.entries(data).map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                return (
                    <div key={key}>
                        <h3>{key}</h3>
                        <div className='user-info'>
                            {showData(value)}
                        </div>
                    </div>
                );
            }
            if (key == "image" || key == "username") {
                return
            }

            return (
                <p key={key}>
                    {key}: {String(value)}
                </p>
            );
        });
    }

    return (
        <div className="User page-container">
            <h1>{user?.username}</h1>

            <img src={user?.image} alt={user?.username} />
            <div className='user-info'>
                <h3>Info: </h3>
                {showData(user)}
            </div>
        </div>
    );
}