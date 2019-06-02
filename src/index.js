import './config/ReactotronConfig';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Post from './components/Post';

console.tron.log('GoNative desafio01');

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Learn React Native',
        user: 'Lucas Viga',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 2,
        title: 'Learn React Native',
        user: 'Lucas V',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 3,
        title: 'Learn React Native',
        user: 'lcs01',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
