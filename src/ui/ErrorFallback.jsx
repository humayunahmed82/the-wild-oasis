const ErrorFallback = ({ error, resetErrorBoundary }) => {
	return (
		<main className="h-screen bg-slate-50 dark:bg-gray-900 flex items-center justify-center p-20">
			<div className="bg-white dark:bg-[#18212f] border border-solid border-gray-100 dark:border-gray-800 text-center p-20 flex-[0_1_96rem]">
				<h1 className="text-5xl font-semibold mb-6">Something went wrong 🧐</h1>
				<p className="font-sono mb-[3.2rem] text-gray-500 dark:text-gray-400">
					{error.message}
				</p>
				<button
					onClick={resetErrorBoundary}
					className="text-[1.6rem] py-[1.2rem] px-[2.4rem] font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700 rounded-lg focus:outline-0 focus:outline-offset-0"
				>
					Try Again
				</button>
			</div>
		</main>
	);
};

export default ErrorFallback;
