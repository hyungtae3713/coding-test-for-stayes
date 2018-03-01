import React from 'react';

const Button = ({ type = 'button', color = 'primary', size, children, ...rest }) => {
    const classes = ['btn', `btn-${color}`, `btn-${size}`];
    if(size)
        classes.push(`btn-${size}`);
    return (
        <button type={type} className={classes.join(' ')} {...rest}>
            {children}
        </button>
    );
};

export default Button;