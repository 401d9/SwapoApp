import React, { useState } from 'react';
export const LogoutContext = React.createContext();
function LogoutProvider(props){
  const [logoutState,setLogoutState] = useState({});
 const logout = () => {
     console.log('loggedOut');
    setLogoutState(false, null, {});
  };

const state = {logout};
    return (
      <LogoutContext.Provider value={state}>
      </LogoutContext.Provider>
    );
}
export default LogoutProvider;