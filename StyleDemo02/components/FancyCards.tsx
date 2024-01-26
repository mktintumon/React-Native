import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Old City</Text>
            <Text style={styles.cardLabel}>Patna city , BIHAR</Text>
            <Text style={styles.cardDesc}>This is the oldest city in the India.
            This is the origin of the buddha, the great community for humanity.</Text>
            <Text style={styles.cardFooter}>10 km away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 30,
    color: 'black',
  },
  card: {
    width:370,
    height:380,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal:10
  },
  elevatedCard: {
    backgroundColor:'#DFCEA9'
  },
  cardImage: {
    height: 200,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,

  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:10
  },
  cardTitle:{
    fontSize:20,
    fontWeight:'bold',
    color:'red'
  },
  cardLabel:{
    fontSize:16,
    color:'black',
    fontWeight:'bold',
    marginBottom:10
  },
  cardDesc:{
    fontSize:16,
    color:'gray',
    fontWeight:'bold',
    marginBottom:10
  },
  cardFooter:{
    fontStyle:'italic'
  }
});
