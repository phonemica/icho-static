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
	ListRow: {
		flex: 1,
		padding: 0,
		borderBottomWidth: 0.5,
	},
	ListItem: {
		fontSize: 18,
		paddingBottom: 10,
		paddingTop: 10
	},
	InfoButton: {
		backgroundColor: headerBarColor,
	}
});
