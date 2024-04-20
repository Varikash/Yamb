import React from 'react';

const ClearButton: React.FC = () => {
    const clearLocalStorage = () => {
        try {
            localStorage.clear();
            console.log("Local storage cleared");
        } catch (e) {
            console.warn(e);
        }
    }

    return (
        <button onClick={clearLocalStorage}>Clear storage</button>
    );
}

export default ClearButton;