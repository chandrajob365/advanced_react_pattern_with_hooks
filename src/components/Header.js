import React, { useContext } from 'react';
import ExpandableContext from '../context/ExpandableContext';
import './Header.css';

const Header = ({children, className = '', ...otherProps}) => {
    const {toggle} = useContext(ExpandableContext);
    const combinedClassName = ['Expandable-trigger', className].join('')
    return (
        <button className={combinedClassName} onClick={toggle} {...otherProps}>{children}</button>
    )
}

export default Header;