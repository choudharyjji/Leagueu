import React from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

import colourUtils from '../../../utils/styles/colours';
import rankedQueueTypes from '../../../utils/ranked-queue-type';

export const RankedInfo = ({
  queueType,
  wins,
  losses,
  winRatio,
  rank,
  tier,
  leaguePoints,
  rankIcon,
}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: rankIcon }} />
    <Text style={styles.text}>{rankedQueueTypes[queueType]}</Text>
    <Text style={styles.text}>{`${wins}W / ${losses}L`}</Text>
    <Text style={styles.text}>{`${winRatio}% Win Rate`}</Text>
    <Text style={styles.text}>{`${tier} ${rank}`}</Text>
    <Text style={styles.text}>{`${leaguePoints} LP`}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colourUtils.linkWater,
  },
  image: {
    height: 150,
    width: 150
  },
  text: {
    color: colourUtils.apple,
  }
});

export default RankedInfo;
