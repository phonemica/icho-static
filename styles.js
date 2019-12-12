'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

const backgroundColor = "#FDFDFD"
const headerBarColor = "#6B3851"
const globalTextSize = 16;

module.exports = StyleSheet.create({
	Container: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
		backgroundColor: backgroundColor,
		padding: 10
	},
	AboutPage: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
		backgroundColor: headerBarColor,
		padding: 10
	},
	AboutText: {
		color: backgroundColor,
		fontSize: globalTextSize,
		paddingBottom: 10
	},
	AboutTextBold: {
		color: backgroundColor,
		fontSize: globalTextSize,
		fontWeight: "bold"
	},
	row: {
		flex: 1,
		padding: 0,
		borderBottomWidth: 0.5,
		borderColor: "#dddddd"
	},
	headword: {
		fontSize: 20,
		color: "#444444",
		fontFamily: 'banchob'
	},
	phonemic: {
		position: 'relative',
		top: 10,
		paddingBottom: 10,
		fontSize: 22,
		color: "#444444",
		fontFamily: 'banchob'
	},
	snippet: {
		fontSize: 18,
		color: "#444444"
	},
	title: {
		color: '#FDFDFD',
		fontSize: 20
	},
	titlescript: {
		color: '#FDFDFD',
		fontSize: 30,
	},
	textinput: {
		height: 46,
	}
});
