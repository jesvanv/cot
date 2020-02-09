import React from 'react';

export const Button = ({text, onClick, className}) => {
    return (
        <button id='promo-button' className={className} onClick={onClick}>{text}</button>
    )
}