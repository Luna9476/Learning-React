import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
import colorData from "./color-data.json"

const ColorContext = createContext();
// hook
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({children}) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) =>
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                color,
                title
            }
        ]);
    
    const removeColor = id => setColors(colors.filter(color => color.id !== id));

    const rateColor = (id, rating) =>
        setColors(
            colors.map(color => (color.id === id? {...color, rating} : color))
        );

    return (
        <ColorContext.Provider value={{colors, setColors, addColor, removeColor, rateColor}}>
            {children}
        </ColorContext.Provider>
    )
}