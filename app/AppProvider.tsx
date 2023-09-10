'use client';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({});
export const useApp = () => useContext(AppContext);
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [playlistState, setPlaylistState] = useState(false);
  return (
    <AppContext.Provider
      value={{
        playlistState,
        togglePlaylist: () => setPlaylistState((prev) => !prev),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
