import { createContext, useContext } from "react";

const TableContext = createContext();

const Table = ({ children, columns }) => {
	return (
		<TableContext.Provider value={{ columns }}>
			<div
				className="border border-solid border-gray-200 dark:border-gray-700 text-[1.4rem] bg-white dark:bg-[#18212f] rounded-lg overflow-hidden"
				role="table"
			>
				{children}
			</div>
		</TableContext.Provider>
	);
};

const Header = ({ children }) => {
	const { columns } = useContext(TableContext);

	return (
		<header
			role="row"
			className={`px-[2.4rem] py-[1.6rem] bg-gray-50 dark:bg-gray-900 border-b border-solid border-gray-100 dark:border-gray-800 uppercase tracking-wider font-semibold text-gray-600 grid gap-10 items-center transition-none ${columns} `}
		>
			{children}
		</header>
	);
};
const Row = ({ children }) => {
	const { columns } = useContext(TableContext);

	return (
		<div
			role="row"
			className={`px-[2.4rem] py-[1.2rem] border-b border-solid border-gray-100 dark:border-gray-800 last:border-b-0 grid gap-10 items-center transition-none ${columns}`}
		>
			{children}
		</div>
	);
};

const Body = ({ data, render }) => {
	if (!data.length)
		return (
			<p className="text-[1.6rem] font-semibold text-center m-10">
				No data show at the moment
			</p>
		);

	return <div className="my-2">{data.map(render)}</div>;
};

const Footer = ({ children }) => {
	return (
		<footer className="bg-gray-50 dark:bg-gray-900 flex justify-center p-5">
			{children}
		</footer>
	);
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
