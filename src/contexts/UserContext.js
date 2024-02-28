import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the context
const UserContext = createContext();

// Step 2: Create a Provider Component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'Shaka Zulu', email: 'Shaka.Zulu@example.com' });

    // The value that will be given to the context
    const value = { user, setUser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

// Step 3: Create a custom hook to use the user context
export const useUser = () => {
    const context = useContext(UserContext);
    
    // This is a good place to throw an error if the context is null
    // This would indicate that this hook is being used outside of the UserProvider
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};

// Optional: Export the context itself in case it's needed directly
export default UserContext;