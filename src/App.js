import './style/style.css';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import { useState } from 'react';
function App() {
  const [dialogOpen, setDialogOpen] = useState(true);
  
  const handleDialogOpen = () =>{
    setDialogOpen(true);
  }

  const handleDialogClosed = () =>{
    setDialogOpen(false);
  }

  return (
    <div className="flex justify-center container relative h-screen w-screen">
      <StarRating />
      <Dialog open={dialogOpen} close={handleDialogClosed}/>  
    </div>
  );
}

export default App;
