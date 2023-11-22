import { useState } from "react";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";

import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const LoginForm = () => {
	const [email, setEmail] = useState("demo@demo.com");
	const [password, setPassword] = useState("demo@123");

	const { login, isLoading } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email || !password) return;

		login({ email, password });
	};

	return (
		<Form onSubmit={handleSubmit} type="regular">
			<FormRowVertical label="Email address">
				<input
					className={Input}
					type="email"
					id="email"
					// This makes this form better for password managers
					autoComplete="username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical label="Password">
				<input
					className={Input}
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					disabled={isLoading}
				/>
			</FormRowVertical>
			<FormRowVertical>
				<button
					className="text-[1.6rem] py-[1.2rem] px-[2.4rem] uppercase font-medium rounded-lg text-indigo-50 bg-indigo-600 hover:bg-indigo-700"
					disabled={isLoading}
				>
					{!isLoading ? "Login" : <SpinnerMini />}
				</button>
			</FormRowVertical>
		</Form>
	);
};

export default LoginForm;
