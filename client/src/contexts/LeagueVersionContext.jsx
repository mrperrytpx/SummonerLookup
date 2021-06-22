import { useState, createContext, useCallback } from 'react';

export const LeagueVersionContext = createContext();

function LeagueVersionContextProvider(props) {
    const [version, setVersion] = useState(false);

    const setLeagueVersion = useCallback((string) => {
        setVersion(string);
    }, [setVersion]);

    const value = { version, setLeagueVersion };

    return (
        <LeagueVersionContext.Provider value={value}>
            {props.children}
        </LeagueVersionContext.Provider>
    )
}

export default LeagueVersionContextProvider;