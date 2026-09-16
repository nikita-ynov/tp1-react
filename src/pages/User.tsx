import { useParams, useNavigate } from 'react-router-dom';

import { users } from '../assets/users.json'


export default function User() {
    let { id } = useParams();
    let navigate = useNavigate();

    const user = users.find(user => user.id == Number(id));



    return (
        <>
            <div className="User page-container">
                <h1>{user?.username}</h1>
                <img src={user?.image} alt="" />
            </div>
        </>
    )
}