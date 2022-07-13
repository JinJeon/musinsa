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

const fonts = {
	main: {
		'font-family': 'AppleR',
		'font-style': 'normal',
		'font-size': '18px',
		'font-weight': '200',
	},
};

const theme = { colors, fonts };

type TTheme = typeof theme;
type TKeysFonts = keyof typeof fonts;
type TKeysColors = keyof typeof colors;

export type { TTheme, TKeysColors, TKeysFonts };
export default theme;
