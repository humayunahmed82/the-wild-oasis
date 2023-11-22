import Spinner from "./Spinner";

import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();

	// 1. Load the authenticated user
	const { isLoading, user, isAuthenticated } = useUser();

	// 2. If there is NO authentication user, redirect to the /login page
	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate("/login");
	}, [isLoading, isAuthenticated, navigate]);

	// 3. While loading, show a spinner
	if (isLoading)
		return (
			<div className="h-screen bg-gray-50 flex items-center justify-center">
				<Spinner />
			</div>
		);

	// 4. If there is a user, render the app
	if (isAuthenticated) return children;
};

export default ProtectedRoute;
