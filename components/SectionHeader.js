import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class SectionHeader extends React.PureComponent {
  render() {
    return <Text style={styles.sectionHeader}>{this.props.text}</Text>;
  }
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderBottomWidth: 2,
    borderColor: 'red',
    color: 'rgb(109,109,114)',
    letterSpacing: 0.3,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingTop: 8,
    fontSize: 11
  }
});
