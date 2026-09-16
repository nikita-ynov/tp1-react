import { users } from '../assets/users.json'
import UserCard from "../components/UserCard";


function UserList() {

    return (
        <>

            <div className="grid-container page-container">
                {users.map((user) => (
                    <UserCard
                        id={user.id}
                        image={user.image}
                        firstName={user.firstName}
                    />
                ))}
            </div>
        </>
    )
}

export default UserList;

