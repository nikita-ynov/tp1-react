import { useState } from "react"

import { users } from '../assets/users.json'
import { useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    function submitData() {
        if (users.find(user => user.email == email) && users.find(user => user.password == password)) {
        navigate(
            {
                pathname: "/profile",
            },
            {
                state: { id: users.find(user => user.email == email)?.id },
            },
        );
        } else {
            setError(true)
        }



    }
    return (
        <section className="Login center">
            <h2>Log in</h2>
            <label htmlFor="email">
                E-mail
                <input type="email" name="email" placeholder="example@email.com" id=""
                    onChange={(e) => {setEmail(e.target.value); setError(false)}}
                />
            </label>
            <label htmlFor="password">
                Password
                <input type="password" name="password"
                    placeholder="Your password"
                    onChange={(e) => {setPassword(e.target.value); setError(false) }}

                />
            </label>
            {error ? 
            <>
            <p className="error">Password or Email are Wrong</p>
            </>   : 
            ""
        }
            <button type="button" onClick={submitData}>Submit</button>
        </section>
    )
}