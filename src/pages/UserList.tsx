import { Link } from "react-router-dom";

function UserList() {
    const users = [
        {
            "firstName": "Harry1",
            "lastName": "Poter2"
        },
        {
            "firstName": "Harry2",
            "lastName": "Poter2"
        },
        {
            "firstName": "Harry3",
            "lastName": "Poter3"
        }
    ];

    return (
        <>
            <div id="center">
                {users.map((user) =>
                    <div id="next-steps">
                        <p>name: {user.firstName}</p>
                        <p>last name: {user.lastName}</p>
                        <Link className="counter" to={`/profile/${user.firstName}`}>Go to Profile</Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserList;

