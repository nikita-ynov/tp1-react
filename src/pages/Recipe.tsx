import { useParams } from 'react-router-dom';

import { recipes } from '../assets/recipes.json'


export default function Recipe() {
    let { id } = useParams();

    const recipe = recipes.find(recipe => recipe.id == Number(id));

    return (
        <>
            <div className="Recipe page-container">
                <div className="title">
                    <div className="info">
                        <h1>{recipe?.name}</h1>
                        <h2>Temps de préparation: {recipe?.prepTimeMinutes}</h2>
                        <h3>Temps de cuisson: {recipe?.cookTimeMinutes}</h3>
                    </div>
                    <img src={recipe?.image} alt="" />
                </div>
                <div className="other">
                    <div className="left">
                        <ul>
                            <h4>Ingreidents</h4>
                            {recipe?.ingredients.map((ingredient) => (
                                <li>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <h4>Instructions</h4>
                            {recipe?.instructions.map((instruction) => (
                                <li>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}