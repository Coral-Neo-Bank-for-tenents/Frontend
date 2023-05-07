import React, { useState } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import TransactionsScreen from "./screens/TransactionsScreen";
import PayScreen from "./screens/PayScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfilePage from "../MainAppComponent/ProfilePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchange, faCreditCard, faUser } from "@fortawesome/free-solid-svg-icons";


function MainScreen() {
  return (
    <div>
        <TransactionsScreen/>
    </div>
  );
}

export default MainScreen;
