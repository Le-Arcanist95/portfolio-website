import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    
    return token ? (
            console.log("You are logged in"),
            children
        ) : (
            console.log("You are not logged in"),
            <Navigate to="/auth/login" />
    );
};