import StarRating from './StarRating';

import './App.css';

function App() {
  return (
    <StarRating totalStars={5}
      style={{ backgroundColor: "lightblue" }}
      onDoubleClick = {e => alert("double click")} />
  );
}

export default App;
