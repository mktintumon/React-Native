import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Mohit kumar',
      status: 'Making coding platform - CodeBOX',
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    },
    {
      uid: 2,
      name: 'Mohit kumar',
      status: 'Making coding platform - CodeBOX',
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    },
    {
      uid: 3,
      name: 'Mohit kumar',
      status: 'Making coding platform - CodeBOX',
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    },
    {
      uid: 4,
      name: 'Mohit kumar',
      status: 'Making coding platform - CodeBOX',
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    },
    {
      uid: 5,
      name: 'Mohit kumar',
      status: 'Making coding platform - CodeBOX',
      imageUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.username}>{name}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    marginBottom:20
  },
  container: {
    paddingHorizontal: 15,
  },
  userCard: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    gap:20,
    marginBottom:20,
    backgroundColor:'#BDD3FF',
    padding:10,
    borderRadius:10
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  username: {
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },
  status: {
    fontSize:15
  },
});
