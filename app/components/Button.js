import React from 'react';

export const Button = ({ id, text, onClick, className, children }) => {
    return (
        <button id={id} className={className} onClick={onClick}>{children ? children : text}</button>
    )
}