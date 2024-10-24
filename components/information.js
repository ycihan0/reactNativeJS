import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function information({title, imageSource, desc}) {
  return (
    <View>
      <Image source={imageSource} style={styles.img}/>
      <Viev style={styles.descTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textDesc}>{desc}</Text>
      </Viev>
    </View>
  )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
      },
      descTitle: {
        alignItems: 'center',
        paddingVertical: 20,
      },
      title: {
        fontSize: 30,
      },
      textDesc: {
        fontSize: 20,
      },
})