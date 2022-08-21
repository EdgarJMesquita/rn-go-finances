import { createContext, ReactNode, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  User,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "147105321954-of7f82muikfcrjlisd2e4k41ukbk4oju.apps.googleusercontent.com",
  offlineAccess: false,
});

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   photo?: string;
// };

type AuthContextProps = {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
};
type AuthProvierProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProvierProps) {
  const [user, setUSer] = useState<User | null>(null);

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        "339743968812-2kclha352qs38sq9v823e26oe6g9sv79.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@edgarjonas/gofinances";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");
      const params = `?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const authUrl = "https://accounts.google.com/o/oauth2/v2/auth" + params;

      /* const response = await AuthSession.startAsync({
        authUrl,
      }); 
      console.log(response);
      */
      const user = await GoogleSignin.addScopes({});
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
      throw new Error("error");
    }
  }

  useEffect(() => {
    async function checkIfUserAlreadySignIn() {
      const response = await GoogleSignin.getCurrentUser();
      setUSer(response);
    }
    checkIfUserAlreadySignIn();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
