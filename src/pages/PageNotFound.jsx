import { useMoveBack } from "../hooks/useMoveBack";

const PageNotFound = () => {
	const moveBack = useMoveBack();

	return (
		<main className="h-screen bg-gray-50 flex items-center justify-center p-[4.8rem]">
			<div className="bg-white border border-solid border-gray-100 rounded-xl p-[4.8rem] flex-[0_1_94rem] text-center">
				<h1 className="text-5xl font-semibold mb-12">
					The page you are looking for could not be found 😢
				</h1>
				<button onClick={moveBack} size="large">
					&larr; Go back
				</button>
			</div>
		</main>
	);
};

export default PageNotFound;
