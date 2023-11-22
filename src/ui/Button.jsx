import styled, { css } from "styled-components";

const sizes = {
	small: css`
		font-size: 1.2rem;
		padding: 0.4rem 0.8rem;
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	`,
	medium: css`
		font-size: 1.4rem;
		padding: 1.2rem 1.6rem;
		font-weight: 500;
	`,
	large: css`
		font-size: 1.6rem;
		padding: 1.2rem 2.4rem;
		font-weight: 500;
	`,
};

const variations = {
	primary: css`
		color: var(--color-brand-50);
		background-color: var(--color-brand-600);

		&:hover {
			background-color: var(--color-brand-700);
		}
	`,
	secondary: css`
		color: var(--color-grey-600);
		background: var(--color-grey-0);
		border: 1px solid var(--color-grey-200);

		&:hover {
			background-color: var(--color-grey-50);
		}
	`,
	danger: css`
		color: var(--color-red-100);
		background-color: var(--color-red-700);

		&:hover {
			background-color: var(--color-red-800);
		}
	`,
};

const Button = styled.button`
	border: 0;
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-sm);

	${(props) => sizes[props.size]}
	${(props) => variations[props.variation]}
`;

Button.defaultProps = {
	variation: "primary",
	size: "medium",
};

export default Button;

// const sizes = [
// 	{
// 		small:
// 			"text-[1.2rem] py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center rounded-lg",
// 	},
// 	{ medium: "text-[1.4rem] py-[1.2rem] px-[1.6rem] uppercase font-medium rounded-lg" },
// 	{ large: "text-[1.6rem] py-[1.2rem] px-[2.4rem] uppercase font-medium rounded-lg" },
// ];

// const variations = [
// 	{ primary: "text-indigo-50 bg-indigo-600 hover:bg-indigo-700" },
// 	{ secondary: "text-gray-600 bg-white hover:bg-gray-50" },
// 	{ danger: "text-red-50 bg-red-700 hover:bg-red-800" },
// ];

// const button = `border-0 rounded-lg shadow-custom-1`;
