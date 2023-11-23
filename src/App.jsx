import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Toaster } from "react-hot-toast";

import { DarkModeProvider } from "./context/DarkModeContext";

// Import Page Component
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import Cabins from "./pages/Cabins";
import NewUsers from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

const App = () => {
	return (
		<DarkModeProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools />
				<BrowserRouter>
					<Routes>
						<Route
							element={
								<ProtectedRoute>
									<AppLayout />
								</ProtectedRoute>
							}
						>
							<Route
								index
								element={<Navigate replace to="dashboard " />}
							></Route>
							<Route path="dashboard" element={<Dashboard />}></Route>
							<Route path="bookings" element={<Bookings />}></Route>
							<Route path="bookings/:bookingId" element={<Booking />}></Route>
							<Route path="checkin/:bookingId" element={<Checkin />}></Route>
							<Route path="cabins" element={<Cabins />}></Route>
							<Route path="users" element={<NewUsers />}></Route>
							<Route path="settings" element={<Settings />}></Route>
							<Route path="account" element={<Account />}></Route>
						</Route>
						<Route path="login" element={<Login />}></Route>
						<Route path="*" element={<PageNotFound />}></Route>
					</Routes>
				</BrowserRouter>

				<Toaster
					position="top-center"
					gutter={12}
					containerStyle={{ margin: "8px" }}
					toastOptions={{
						success: {
							duration: 3000,
						},
						error: {
							duration: 3000,
						},
						style: {
							fontSize: "16px",
							maxWidth: "500px",
							padding: "16px 24px",
							backgroundColor: "var(--color-grey-0)",
							color: "var(--color-grey-700)",
						},
					}}
				/>
			</QueryClientProvider>
		</DarkModeProvider>
	);
};

export default App;
