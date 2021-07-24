import React from 'react';
export const LogoutContext = React.createContext();
function LogoutProvider(props){
  
 const logout = () => {
     console.log('loggedOut');
    setLoginState(false, null, {});
  };

const state = {logout};
    return (
      <LogoutContext.Provider value={state}>
      </LogoutContext.Provider>
    );
}
export default LogoutProvider;