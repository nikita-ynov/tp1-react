import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="center ">
            <h1>Page Not Found</h1>
            <Link  to={"/"}>Go Home</Link>
        </div>
    )
}