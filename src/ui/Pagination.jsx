import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

const active = false;

const Pagination = ({ count }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = !searchParams.get("page")
		? 1
		: Number(searchParams.get("page"));

	const pageCount = Math.ceil(count / PAGE_SIZE);

	const nextPage = () => {
		const next = currentPage === pageCount ? currentPage : currentPage + 1;

		searchParams.set("page", next);
		setSearchParams(searchParams);
	};
	const PrevPage = () => {
		const prev = currentPage === 1 ? currentPage : currentPage - 1;

		searchParams.set("page", prev);
		setSearchParams(searchParams);
	};

	if (pageCount <= 1) return null;

	return (
		<div className="w-full flex items-center justify-between">
			<p className="text-[1.4rem] ml-4">
				Showing{" "}
				<span className="font-semibold">
					{(currentPage - 1) * PAGE_SIZE + 1}
				</span>{" "}
				to{" "}
				<span className="font-semibold">
					{currentPage === pageCount ? count : currentPage * PAGE_SIZE}
				</span>{" "}
				of <span className="font-semibold">{count}</span> result
			</p>

			<div className="flex gap-[0.6rem]">
				<button
					onClick={PrevPage}
					disabled={currentPage === 1}
					className={`border-0 rounded-lg font-medium text-[1.4rem] flex items-center justify-center gap-[0.4rem] py-3 px-5 transition-all duration-300 [&:has(span:last-child)]:pl-2 [&:has(span:first-child)]:pr-2 [&:hover:not(:disabled)]:bg-indigo-600 [&:hover:not(:disabled)]:text-indigo-50 hover:bg-indigo-600 hover:text-indigo-50 focus:outline-0 focus:outline-offset-0 disabled:opacity-60 ${
						active
							? "bg-indigo-600 text-indigo-50"
							: "bg-gray-200 dark:bg-gray-700 text-inherit"
					}`}
				>
					<HiChevronLeft className="w-[1.8rem] h-[1.8rem]" />
					<span>Previews</span>
				</button>
				<button
					onClick={nextPage}
					disabled={currentPage === pageCount}
					className={`border-0 rounded-lg font-medium text-[1.4rem] flex items-center justify-center gap-[0.4rem] py-3 px-5 transition-all duration-300 [&:has(span:last-child)]:pl-2 [&:has(span:first-child)]:pr-2 [&:hover:not(:disabled)]:bg-indigo-600 [&:hover:not(:disabled)]:text-indigo-50 hover:bg-indigo-600 hover:text-indigo-50 focus:outline-0 focus:outline-offset-0 disabled:opacity-60 ${
						active
							? "bg-indigo-600 text-indigo-50"
							: "bg-gray-200 dark:bg-gray-700 text-inherit"
					}`}
				>
					<span>Previews</span>
					<HiChevronRight className="w-[1.8rem] h-[1.8rem]" />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
