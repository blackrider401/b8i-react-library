/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {TextWrap, Container, Avatar, SizedBox} from './lib/main';

const obj = ['', '', '', ''];
const pic = 'https://randomuser.me/api/portraits/women/96.jpg';

const App = () => {
  return (
    <>
      <Container flex={1} backgroundColor="#f0f0f0">
        <SizedBox height={50} />
        <Container
          flex={1}
          horizontalAlignment="center"
          verticalAlignment="center"
          borderTopLeftRadius={50}
          borderTopRightRadius={50}
          backgroundColor="#ff9800">
          <TextWrap ad>HEllow</TextWrap>
        </Container>
      </Container>
    </>
  );
};
export default App;
