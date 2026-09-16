import { Link } from 'react-router-dom';


export default function UserCard(props: { id: number, image: string, firstName: string }) {
    let { id, image, firstName } = props;

    return (
        <Link className='recipe' to={`/user/${id}`}>
            <img src={image} alt="" />
            <div className="info">
                <h2>{firstName}</h2>
            </div>
        </Link>
    )
}