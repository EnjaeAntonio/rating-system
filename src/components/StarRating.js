import { useState } from "react"
import Star from "./Star"

function StarRating({totalStars = 5}) {
    const [starsSelected, setStarsSelected] = useState(0);
    const arrayOfStars = [...Array(totalStars)]

    const feedback = (index) => {
        switch(index){
            case 1:
                return "Oh no!";
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
        <div className="cursor-pointer flex justify-center text-5xl">
        {arrayOfStars.map((star, index) =>{
            return (
            <Star
                key = {index}
                color = {starsSelected > index}
                onSelect={() => setStarsSelected(index + 1)}
            />
            )
        })}
        </div>
        <h2 className="text-white text-1xl mt-2">{starsSelected ? feedback(starsSelected) : "Give us a rating!"}</h2>
    </section>
  )
}

export default StarRating;