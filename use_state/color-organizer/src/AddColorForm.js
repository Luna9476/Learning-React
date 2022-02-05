import React from "react";
import { useColors } from "./ColorProvider";
import { useInput } from "./hooks";

export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");
    const {addColor} = useColors();
    const submit = e => {
        // prevent send a POST by default
        e.preventDefault();
        addColor(titleProps.value, colorProps.value)
        resetTitle()
        resetColor();
    }
    return (
        <form onSubmit={submit}>
            <input  {...titleProps} type="text" placeholder="Color Title" required />
            <input {...colorProps} type="color" required />
            <button>ADD</button>
        </form>
    )
};
