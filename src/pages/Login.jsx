import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

const Login = () => {
	return (
		<main className="min-h-screen grid grid-cols-[48rem] content-center justify-center gap-[3.2rem]  bg-gray-50 dark:bg-gray-900">
			<Logo />
			<h4 className="text-5xl font-semibold text-center">
				Login to your account
			</h4>
			<LoginForm />
		</main>
	);
};

export default Login;
