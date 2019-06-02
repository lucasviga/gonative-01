import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.post}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.user}>{data.user}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // vertical
    padding: 15,
    backgroundColor: '#EE7777',
  },
  post: {
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
  user: {
    color: '#777',
  },
  description: {
    color: '#333',
    fontSize: 16,
  },
});

export default Post;
