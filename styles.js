'use strict';

var React = require('react-native');
var {StyleSheet} = React;

const backgroundColor = '#FEFEFE';
const headerBarColor = '#0B1C32';
const accentColor = '#56A979';
const em = 18;
const h1 = parseInt(em * 1.75);
const h2 = parseInt(em * 1.5);
const h3 = parseInt(em * 1.25);
const cardlessMargin = h3;
const halfem = parseInt(em / 2);
const quarterem = parseInt(em / 4);

module.exports = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: backgroundColor,
    color: headerBarColor,
  },
  HomeContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: halfem,
  },
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: backgroundColor,
    padding: em,
	borderRadius: 3,
	margin: em,
	marginTop: halfem,
	alignSelf: 'stretch',
  },
  AboutPage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: cardlessMargin, // cardless pages
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
  ListRowContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: backgroundColor,
    overflow: 'hidden',
    margin: halfem,
	// marginBottom: quarterem,
	marginTop: 0,
    borderRadius: 3,
  },
  ListRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: backgroundColor,
    overflow: 'hidden',
    margin: em,
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
    fontSize: h1,
    fontWeight: 'bold',
  },
  EntrySection: {
    fontSize: h3,
    fontWeight: 'bold',
  },
  EntryText: {
    fontSize: em,
    lineHeight: h1,
  }
});
