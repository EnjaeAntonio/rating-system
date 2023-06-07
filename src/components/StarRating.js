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
    <section>
        <h2>{starsSelected ? feedback(starsSelected) : "Give a rating!"}</h2>
    </section>
  )
}

export default StarRating