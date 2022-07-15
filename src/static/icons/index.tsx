const icons = {
	search: (
		<svg
			width="18"
			height="19"
			viewBox="0 0 18 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.75 13C10.3734 13 12.5 10.8734 12.5 8.25C12.5 5.62665 10.3734 3.5 7.75 3.5C5.12665 3.5 3 5.62665 3 8.25C3 10.8734 5.12665 13 7.75 13ZM7.75 12C5.67893 12 4 10.3211 4 8.25C4 6.17893 5.67893 4.5 7.75 4.5C9.82107 4.5 11.5 6.17893 11.5 8.25C11.5 10.3211 9.82107 12 7.75 12ZM14.3464 15.5536L11.3464 12.5536L12.0536 11.8464L15.0536 14.8464L14.3464 15.5536Z"
				fill="#000000"
			/>
			<mask
				id="mask0_7_133"
				maskUnits="userSpaceOnUse"
				x="3"
				y="3"
				width="13"
				height="13"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.75 13C10.3734 13 12.5 10.8734 12.5 8.25C12.5 5.62665 10.3734 3.5 7.75 3.5C5.12665 3.5 3 5.62665 3 8.25C3 10.8734 5.12665 13 7.75 13ZM7.75 12C5.67893 12 4 10.3211 4 8.25C4 6.17893 5.67893 4.5 7.75 4.5C9.82107 4.5 11.5 6.17893 11.5 8.25C11.5 10.3211 9.82107 12 7.75 12ZM14.3464 15.5536L11.3464 12.5536L12.0536 11.8464L15.0536 14.8464L14.3464 15.5536Z"
					fill="white"
				/>
			</mask>
			<g mask="url(#mask0_7_133)" />
		</svg>
	),
	warning: (
		<svg
			width="69"
			height="69"
			viewBox="0 0 69 69"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M34.5 3C51.385 3 65.21 16.325 65.997 33H69C68.21 14.67 53.041 0 34.5 0C15.959 0 0.79 14.67 0 33H3.003C3.79 16.325 17.615 3 34.5 3ZM33 42V19H36V42H33ZM33 50.443V46H36V50.443H33ZM34.5 66C51.385 66 65.21 52.675 65.997 36H69C68.211 54.33 53.041 69 34.5 69C15.959 69 0.79 54.33 0 36H3.004C3.79 52.675 17.616 66 34.5 66Z"
			/>
		</svg>
	),
	close: (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.30221 7L2.99998 3.69776L3.69774 3L6.99998 6.30224L10.3022 3L11 3.69776L7.69774 7L11 10.3022L10.3022 11L6.99998 7.69776L3.69774 11L2.99998 10.3022L6.30221 7Z"
			/>
		</svg>
	),
};

type TypeIcons = keyof typeof icons;

export default icons;
export type { TypeIcons };
