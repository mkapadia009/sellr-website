
import React, { createContext, useContext, useState, useEffect } from 'react';

type HashContextType = {
  currentHash: string;
  setHash: (hash: string) => void;
};

const HashContext = createContext<HashContextType>({ 
  currentHash: '', 
  setHash: () => {} 
});

export const useHash = () => useContext(HashContext);

export const HashProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Initialize with just the hash portion (without the # character)
  const [currentHash, setCurrentHash] = useState<string>('');
  
  // Function to manually set hash
  const setHash = (hash: string) => {
    console.log("Setting hash to:", hash);
    
    // Remove any existing # prefix
    const cleanHash = hash.startsWith('#') ? hash.substring(1) : hash;
    
    // Ensure proper encoding for special characters
    try {
      // Encode the hash properly for URL
      window.location.hash = cleanHash; // Don't encode here, browser will handle it
    } catch (error) {
      console.error("Error setting hash:", error);
      // Fallback to direct setting
      window.location.hash = cleanHash;
    }
  };
  
  useEffect(() => {
    const handleHashChange = () => {
      try {
        const rawHash = window.location.hash;
        // Ensure we store hash without # prefix
        const cleanHash = rawHash.startsWith('#') ? rawHash.substring(1) : rawHash;
        console.log("Hash changed to clean hash:", cleanHash);
        setCurrentHash(cleanHash);
      } catch (error) {
        console.error("Error handling hash change:", error);
      }
    };
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check when component mounts
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  return (
    <HashContext.Provider value={{ currentHash, setHash }}>
      {children}
    </HashContext.Provider>
  );
};

export default HashContext;
