import { FaStar } from 'react-icons/fa';

function Star({ color = false, onSelect = f => f}) {
  return (
    <FaStar color={color ? 'yellow' : 'grey'} onClick={onSelect}></FaStar>
  )
}

export default Star;