import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";

export default function App() {
  // const [colors, setColors] = useState(colorData);

  // const removeColor = id => {
  //   const newColors = colors.filter(color => color.id !== id);
  //   setColors(newColors);
  // };

  // const rateColor = (id, rating) => {
  //   const newColors = colors.map(color =>
  //     color.id === id ? { ...color, rating } : color
  //   );
  //   setColors(newColors);
  // };

  // const createColor = (title, color) => {
  //   const newColors = [
  //     ...colors,
  //     {
  //       id: v4(),
  //       rating: 0,
  //       title,
  //       color
  //     }
  //   ];
  //   setColors(newColors);
  // };

  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}