import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Marker from '../components/Marker';

import { OPEN, LIMITED, CLOSED } from '../constants/LocationStatus';

export default class MapLegend extends React.PureComponent {
  render() {
    return (
      <View style={styles.legendBox}>
        <View style={styles.row}>
          <Marker status={OPEN} legend={true} style={{ marginRight: 6 }} />
          <Text style={styles.legendText}>{OPEN}</Text>
        </View>
        <View style={styles.row}>
          <Marker status={LIMITED} legend={true} style={{ marginRight: 6 }} />
          <Text style={styles.legendText}>{LIMITED}</Text>
        </View>
        <View style={styles.row}>
          <Marker status={CLOSED} legend={true} style={{ marginRight: 6 }} />
          <Text style={styles.legendText}>{CLOSED}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  legendBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    borderRadius: 8,
    bottom: 12,
    flexDirection: 'column',
    height: 'auto',
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 13,
    paddingTop: 8,
    position: 'absolute',
    right: 12,
    width: 'auto'
  },
  legendText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 12,
    letterSpacing: -0.2
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    marginBottom: 3
  }
});
