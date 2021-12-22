import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isSubmitted = sessionStorage.getItem('submitted');

    return (
        isSubmitted ? children : <Navigate to="front-end-section-react/daftar" replace />
    );
}