import React from "react";

export default function Instructions({title, steps}) {
    return (
        <section className="instructions">
            <h1>{title}</h1>
            {steps.map((step, i) => (
                <p key={i}>{step}</p>
            ))}
        </section>
    )
}