import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// Dispatch allows dispatching actions to the store
// Selector allows retreiving things from the store
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../Helper/userSlice";
import UserSignUp from "./SignUp/UserSignUp.jsx";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const [showAuthChoice, setShowAuthChoice] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/");
      } else {
        dispatch(setSignOutState());
        navigate("/");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      // Show styled component with Signup form and Google button
      setShowAuthChoice(true);
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const toggleAuthChoice = () => setShowAuthChoice(!showAuthChoice);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleProducts = () => {
    navigate("/products");
  }
  const handleHome = () => {
    navigate("/");
  }
  const handleShop = () => {
    navigate("/vendorDash");
  }

  return (
    <Nav>
      <Logo>
        <img src="src\assets\images\hive.svg" alt="Hive" />
      </Logo>
      <NavMenu>
        <a onClick={handleHome}>
          <img src="src\assets\images\home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        {/* Add a event to header search to popup a search bar*/}
        <a onClick={handleHome}> 
          <img src="src\assets\images\search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a onClick={handleProducts}>
          <img src="src\assets\images\prod.svg" alt="WATCHLIST" />
          <span>PRODUCTS</span>
        </a>
        <a onClick={handleShop}>
          <img src="src\assets\images\store.svg" alt="ORIGINALS" />
          <span>MY STORE</span>
        </a>
      </NavMenu>
      {!userName && showAuthChoice && (
        <AuthChoice onToggle={toggleAuthChoice}>
          <UserSignUp /> 
          <GoogleButton onClick={() => signInWithPopup(auth, provider)}>
            <img src="src\assets\images\google.svg" alt="Google Sign-in" />
            <span>Sign in with Google</span>
          </GoogleButton>
        </AuthChoice>
      )}
      {
        // If the user is not logged in, then show the login button
        !userName ? (
          <Login onClick={handleAuth}>Login</Login>
        ) : (
          <>
            <SignOut>
              <UserImg src={userPhoto} alt={userName} />
              <Dropdown>
                <span onClick={handleAuth}>Sign out</span>
              </Dropdown>
            </SignOut>
          </>
        )
      }
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #07185b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 8px 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const AuthChoice = styled.div`
  position: absolute;
  top: calc(100% + 10px); /* Position below the header */
  right: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10; /* Ensure it's on top of other elements */
`;

const GoogleButton = styled.button`
  background-color: #FFFDD0;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 10px; /* Add some spacing */

  img {
    width: 20px;
    margin-right: 10px;
  }

  span {
    font-weight: bold;
  }
`;

export default Header;
