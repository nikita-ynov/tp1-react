import { useParams, useNavigate } from 'react-router-dom';

export default function Profile() {
    let { username } = useParams();
    let navigate = useNavigate();

    return (
        <>
            <div id="center">
                <button className='counter' onClick={() => navigate(-1)}>Back</button>
                <div>
                    User Name: {username}
                </div>
            </div>
        </>
    )
}