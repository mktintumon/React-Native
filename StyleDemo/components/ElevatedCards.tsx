import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>START</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>TAP</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>ME</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>TO</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>SCROLL</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>MORE...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>❤️</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 30,
    color: 'black',
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 10,
  },
  elevatedCard: {
    backgroundColor: 'gray',
    elevation: 5,
  },
});
