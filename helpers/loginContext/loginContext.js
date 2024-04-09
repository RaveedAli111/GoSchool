import React, { createContext, useState ,useEffect} from "react";

import Cookie from "js-cookie";
import { setAuthToken } from "../../utils/Apis";

export const Context = createContext({});

export const Provider = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userInfo = Cookie.get("userInfo");
    const token = Cookie.get("token");
    if (token && userInfo) {
      setAuthToken(token);
      setUser(userInfo);
    }
  }, []);

 

  return (
    <Context.Provider
      value={{
        state: user,
        user: user,
        setUser:setUser
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export {
  Context as UserContext,
  Provider as UserContextProvider,
} from "./loginContext";
