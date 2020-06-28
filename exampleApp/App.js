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

import {
  TextWrap,
  Container,
  Avatar,
  SizedBox,
  TouchWrap,
  Page,
  InputWrap,
} from './lib/main';
import Icon from 'react-native-vector-icons/Feather';

const obj = ['', '', '', ''];
const pic = 'https://randomuser.me/api/portraits/women/96.jpg';

const App = () => {
  const [isSecure, setIsSecure] = React.useState(true);
  return (
    <Page barIconColor="dark" backgroundColor="#ff9800">
      <Container
        horizontalAlignment="center"
        verticalAlignment="center"
        paddingHorizontal={6}
        flex={1}>
        <Avatar backgroundColor="red" size={30} url={pic} />

        <SizedBox height={5} />

        <InputWrap
          elevation={20}
          borderRadius={50}
          paddingVertical={2}
          icon={<Icon name="mail" size={20} />}
          placeholder="Email"
          backgroundColor="#fff"
          textAlignVertical="center"
          secure={isSecure}
          keyboardType="email-address"
        />

        <SizedBox height={3} />

        <InputWrap
          onToggleSecure={() => setIsSecure(!isSecure)}
          elevation={20}
          borderRadius={50}
          paddingVertical={2}
          icon={<Icon name="lock" size={20} />}
          secureIcon={<Icon name={isSecure ? 'eye' : 'eye-off'} size={20} />}
          placeholder="Password"
          backgroundColor="#fff"
          textAlignVertical="center"
          secure={isSecure}
        />
      </Container>
    </Page>
  );
};
export default App;
