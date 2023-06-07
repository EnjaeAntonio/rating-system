import { FaStar } from 'react-icons/fa';

function Star({ color, onSelect = f => f}) {
  return (
    <FaStar color={color ? '#ddbd00' : 'grey'} onClick={onSelect}></FaStar>
  )
}

export default Star;