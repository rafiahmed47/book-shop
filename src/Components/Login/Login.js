import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();
const provider = new GoogleAuthProvider();

const Login = ({ user, setUser }) => {
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <Container>
      <Button sx={{ width: "50%", m: 1 }} onClick={handleGoogleSignIn}>
        Google Sign in
      </Button>
    </Container>
  );
};

export default Login;
