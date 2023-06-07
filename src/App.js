import './style/style.css';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import { useState } from 'react';
function App() {
  const [dialog, setDialog] = useState(true);

  const renderDialog = () => {
    if(dialog){
      return <Dialog close={() => setDialog(false)}><h1>Dialog</h1></Dialog>;
    }
    return null
  }
    
  return (
    <div className="container">
      <StarRating totalStars={5} />
      {renderDialog()}
    </div>
  );
}

export default App;
