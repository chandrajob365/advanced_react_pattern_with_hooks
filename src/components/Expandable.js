import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import ExpandableContext from '../context/ExpandableContext';
import Header from './Header';
import Body from './Body';
import Icon from './Icon';
import './Expandable.css';
const Expandable = ({
    children,
    onExpand = () => { },
    className = '',
    shouldExpand,
    ...otherProps
}) => {

    // **** Start ***** If component is uncontrolled  
    const [expanded, setExpand] = useState(false);
    const toggle = useCallback(() => setExpand(prevExpanded => !prevExpanded));
    const componentJustMounted = useRef(true);
    // **** End ******

    // **** Start ***** If component is controlled
    const isExpandControlled = shouldExpand !== undefined
    const getState = isExpandControlled ? shouldExpand : expanded;
    const getToggle = isExpandControlled ? onExpand : toggle;
    // **** End ******

    const combinedClassNames = ['Expandable', className].join('');

    useEffect(
        () => {
            if (!componentJustMounted && !isExpandControlled) {
                onExpand(expanded)

            }
            componentJustMounted.current = false
        },
        [expanded, onExpand, isExpandControlled]
    )
    const value = useMemo(() => ({ expanded: getState, toggle: getToggle }), [getState, getToggle]);
    return (
        <ExpandableContext.Provider value={value}>
            <div className={combinedClassNames} {...otherProps}>
                {children}
            </div>
        </ExpandableContext.Provider>
    )
}

Expandable.Header = Header;
Expandable.Icon = Icon;
Expandable.Body = Body;

export default Expandable;
