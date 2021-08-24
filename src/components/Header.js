import React from 'react';

import { useTheme } from '../contexts/ThemeContext';

const Header = () => {

    const { theme, updateTheme } = useTheme();

    return (
        <div style={{color: theme.color, backgroundColor: theme.backgroundColor}}>
            <h1>toucan technologies tennis tour</h1>
            <button onClick={updateTheme} syle={{ color: 'red' }}>Theme: {theme.color}</button>
        </div>
    )
}

export default Header;