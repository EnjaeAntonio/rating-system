import './style/style.css';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import { useState } from 'react';
function App() {
  const [dialogOpen, setDialogOpen] = useState(true);


    
  return (
    <div className="flex justify-center container relative h-screen w-screen">
      <StarRating totalStars={5} />
    </div>
  );
}

export default App;
