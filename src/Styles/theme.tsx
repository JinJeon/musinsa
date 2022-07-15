const defaultFontSize = '16px';
const defaultWidth = {
	'min-width': '350px',
	'max-width': '700px',
};

const fonts = {
	regular: {
		'font-family': 'AppleR',
		'font-style': 'normal',
		'font-size': defaultFontSize,
		'font-weight': '400',
	},
	bold: {
		'font-family': 'AppleB',
		'font-style': 'normal',
		'font-size': defaultFontSize,
		'font-weight': '400',
	},
	xSmall: {
		'font-size': '0.6rem',
		'font-weight': '400',
	},
	small: {
		'font-size': '0.8rem',
		'font-weight': '400',
	},
	medium: {
		'font-size': '1.2rem',
		'font-weight': '400',
	},
};

const colors = {
	white: '#FFFFFF',
	grey1: '#F9F9F9',
	grey3: '#F1F1F1',
	grey4: '#EEEEEE',
	grey5: '#CCCCCC',
	grey6: '#AAAAAA',
	grey7: '#777777',
	black: '#000000',
	blue: '#0078FF',
	red: '#FF0000',
	green: '#18A286',
	background: '#F5F5F5',
};

const theme = { defaultFontSize, defaultWidth, fonts, colors };

type TTheme = typeof theme;
type TKeysFonts = keyof typeof fonts;
type TKeysColors = keyof typeof colors;

export type { TTheme, TKeysColors, TKeysFonts };
export default theme;
