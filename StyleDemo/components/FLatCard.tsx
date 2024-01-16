import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FLatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.cardOne]}>
            <Text>RED</Text>
        </View>
        <View style={[styles.card , styles.cardTwo]}>
            <Text>GREEN</Text>
        </View>
        <View style={[styles.card , styles.cardThree]}>
            <Text>BLUE</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize : 24,
        fontWeight : "bold",
        paddingHorizontal:8,
        marginTop : 30,
        color : "black"
    },
    container : {
        flex : 1,
        flexDirection:"row",
        padding:8
    },
    card : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        width : 100,
        height : 100,
        borderRadius : 5,
        margin : 10
    },
    cardOne : {
        backgroundColor : "red"
    },
    cardTwo : {
        backgroundColor : "green"
    },
    cardThree : {
        backgroundColor : "blue"
    },
})