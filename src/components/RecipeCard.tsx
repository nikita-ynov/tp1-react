import { Link } from 'react-router-dom';


export default function RecipeCard(props: { id: number, image: string, name: string, time: number }) {
    let { id, image, name, time } = props;

    return (
        <Link className='recipe' to={`/recipe/${id}`}>
            <img src={image} alt="" />
            <div className="info">
                <h2>{name}</h2>
                <p>Temps de préparation: {time} min.</p>
            </div>
        </Link>
    )
}