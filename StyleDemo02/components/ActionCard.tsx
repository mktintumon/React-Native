import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blogcard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText2}>
            What's new update in React Native???
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1519922639192-e73293ca430e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={5} style={styles.bodyText}>
            Today we're releasing React Native 0.73! This release adds
            improvements to debugging with Hermes, stable symlink support,
            Android 14 support, and new experimental features. We are also
            deprecating legacy debugging features, and are releasing the next
            pillar of the New Architecture: Bridgeless Mode!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/mktintumon')}>
            <Text style={styles.link}>Read more</Text>
          </TouchableOpacity>
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
  headingText2:{
    fontSize:18,
    paddingHorizontal: 8,
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
  },
  card: {
    width:370,
    height:450,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal:10
  },
  elevatedCard: {
    backgroundColor:'#bcc5d4',
    borderRadius:10,
    elevation:5,
    shadowOffset:{
        width:1,
        height:1
    }
  },
  headingContainer: {
    height:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding:15,
  },
  bodyText:{
    fontSize:18,
    color:'black'
  },
  footerContainer: {
    fontSize:20,
    padding:10,
    marginBottom:20,
    margin:'auto'
  },
  link:{
    fontSize:20,
    color:'blue',
    textAlign:'center',
    alignItems:'center',
    backgroundColor:'white',
    height:35,
    borderRadius:10
  }
});
