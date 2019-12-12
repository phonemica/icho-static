'use strict';

var React = require('react-native');
var {StyleSheet} = React;

const backgroundColor = '#FEFEFE';
const headerBarColor = '#0B1C32';
const accentColor = '#56A979';
const em = 16;

module.exports = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: backgroundColor,
    color: headerBarColor,
  },
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: backgroundColor,
    padding: 10,
  },
  AboutPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: headerBarColor,
    padding: 10,
  },
  AboutText: {
    color: backgroundColor,
    fontSize: em,
    paddingBottom: 10,
  },
  AboutTextBold: {
    color: accentColor,
    fontSize: em,
    fontWeight: 'bold',
  },
  ListRow: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
  },
  ListItemLexeme: {
    fontSize: em,
    fontWeight: 'bold',
    paddingRight: em,
  },
  ListItem: {
    fontSize: em,
    overflow: 'hidden',
  },
  EntryHeader: {
    fontSize: em,
    fontWeight: 'bold',
  },
});
