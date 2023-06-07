import { FaStar } from 'react-icons/fa';

function Star({ selected = false, onSelect = f => f}) {
  return (
    <FaStar color={selected ? 'yellow' : 'grey'} onClick={onSelect}></FaStar>
  )
}

export default Star;