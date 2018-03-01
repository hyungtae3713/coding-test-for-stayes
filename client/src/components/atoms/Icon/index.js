import React from 'react';

const Icon = ({ className, type, onClick }) => {
    const iconClass = ['glyphicon', `glyphicon-${type}`].join(' ');
    return (
        <span className={iconClass + ' ' + className} onClick={onClick}></span>
    );
};

export default Icon;