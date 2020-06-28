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
  SlideTransition,
  ScrollArea,
} from './lib/main';
import Icon from 'react-native-vector-icons/Feather';

const obj = ['', '', '', ''];
const pic = 'https://randomuser.me/api/portraits/women/96.jpg';

const App = () => {
  const [isSecure, setIsSecure] = React.useState(true);
  return (
    <Page barIconColor="dark" backgroundColor="#ff9800">
      <ScrollArea flexGrow={1}>
        <Container
          horizontalAlignment="center"
          verticalAlignment="center"
          paddingTop={10}
          paddingBottom={6}
          paddingHorizontal={6}
          flex={1}>
          <Avatar backgroundColor="red" size={30} url={pic} />
        </Container>

        <Container
          verticalAlignment="center"
          widthPercent="100%"
          backgroundColor="red"
          paddingVertical={6}
          paddingHorizontal={6}
          borderTopRightRadius={50}
          borderTopLeftRadius={50}>
          <SlideTransition direction="vertical" from={80}>
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
              returnKeyType="next"
            />
          </SlideTransition>

          <SizedBox height={2} />

          <SlideTransition direction="vertical" from={80}>
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
              returnKeyType="next"
            />
          </SlideTransition>

          <SizedBox height={2} />

          <SlideTransition from={80} direction="vertical">
            <InputWrap
              onToggleSecure={() => setIsSecure(!isSecure)}
              elevation={20}
              borderRadius={50}
              paddingVertical={2}
              icon={<Icon name="lock" size={20} />}
              secureIcon={
                <Icon name={isSecure ? 'eye' : 'eye-off'} size={20} />
              }
              placeholder="Password"
              backgroundColor="#fff"
              textAlignVertical="center"
              secure={isSecure}
            />
          </SlideTransition>
        </Container>
      </ScrollArea>
    </Page>
  );
};
export default App;
