import './style/style.css';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import { useState } from 'react';
function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleDialogClose = () =>{
    setDialogOpen(prev => !prev);
  }

  return (
    <div className="flex justify-center container relative h-screen w-screen">
      <StarRating />
      <Dialog open={dialogOpen} onClose={handleDialogClose} />  
    </div>
  );
}

export default App;
