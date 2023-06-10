import { useState } from "react"
import Star from "./Star"

function StarRating() {
    const [starsSelected, setStarsSelected] = useState(0);
    const feedback = ["Oh no!", "Not bad!", "Nice!", "Very Good!", "Excellent!"];
    const arrayOfStars = Array(5).fill().map((star, index) =>{
        return (
        <Star
            key = {index}
            color = {starsSelected > index}
            onSelect={() => setStarsSelected(index + 1)}
        />
        )
    })
  return (
    <section className="flex flex-col text-center justify-center">
        <div className="cursor-pointer flex justify-center text-5xl">
        {arrayOfStars}
        </div>
        <h2 className="text-white text-1xl mt-2">{starsSelected ? feedback[starsSelected - 1] : "Give your feedback!"}</h2>
    </section>
  )
}

export default StarRating;