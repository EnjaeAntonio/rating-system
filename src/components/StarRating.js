import { useState } from "react"
import Star from "./Star"

function StarRating({totalStars = 5}) {
    const [starsSelected, setStarsSelected] = useState(0);
    const arrayOfStars = [...Array(totalStars)]

    const feedback = (index) => {
        switch(index){
            case 1:
                return "Poor Performace";
            case 2:
                return "Not bad!";
            case 3: 
                return "Nice!";
            case 4:
                return "Very Good!";
            case 5:
                return "Excellent!";
            default:
                return "";
        }
    }
    
  return (
    <section className="flex flex-col text-center justify-center">
        <div className="flex justify-center text-4xl">
        {arrayOfStars.map((star, index) =>{
            return (
            <Star
                key = {index}
                selected = {starsSelected > index}
                onSelect={() => setStarsSelected(index + 1)}
            />
            )
        })}
        </div>
        <h2 className="text-white text-1xl">{starsSelected ? feedback(starsSelected) : "Give a rating!"}</h2>
    </section>
  )
}

export default StarRating