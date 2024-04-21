import React, { useState } from "react";
import styled from "styled-components";
import userHelper from "../../Helper/userHelper.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setUserSignUpDetails, resetUserSignUpDetails } from '../../Helper/userSignUpSlice.js';

function UserSignUp() {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profile_url, setProfileUrl] = useState("");
  const [password, setPassword] = useState("");

  const createUserWithFirebase = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const firebase_id = user.uid;
      const userData = {
        username,
        email,
        profile_url,
        firebase_id,
      };
      const response = await userHelper.create(userData);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error creating user:", error);

      if (error.code === "auth/email-already-in-use") {
        console.error("That email address is already in use!");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithFirebase();
      console.log(response);
      const { username, email, profileUrl, firebaseId } = response;
      const payload = { username, email, profileUrl, firebaseId };
      console.log("Data sent to backend:", response);
      dispatch(setUserSignUpDetails(payload));
      setUsername("");
      setEmail("");
      setPassword("");
      setProfileUrl("");
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="profileUrl">Profile URL:</label>
          <input
            type="text"
            id="profileUrl"
            value={profile_url}
            onChange={(e) => setProfileUrl(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default UserSignUp;
