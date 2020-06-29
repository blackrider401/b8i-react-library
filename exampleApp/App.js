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
  SlideTransitionCallback,
  scaleFont,
  ImageWrap,
} from './lib/main';
import Icon from 'react-native-vector-icons/Feather';
import {H1, P, H2} from './src/helpers/config';

const obj1 = [
  'https://www.eehealth.org/-/media/images/modules/blog/posts/2019/09/working-out.jpg',
  'https://www.sharp.com/health-news/images/Fitness-tips-for-the-non-athlete-HN1471-iStock-922482702-Sized.jpg',
  'https://www.motherhoodthetruth.com/wp-content/uploads/2019/02/working-out-SWEAT-APP.jpg',
];

const obj2 = [
  'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/Female_Male_Rope_Workout_1296x728-header-1296x728.jpg?w=1155&h=1528',
  'https://www.eehealth.org/-/media/images/modules/blog/posts/2019/09/working-out.jpg',
  'https://www.sharp.com/health-news/images/Fitness-tips-for-the-non-athlete-HN1471-iStock-922482702-Sized.jpg',
  'https://www.motherhoodthetruth.com/wp-content/uploads/2019/02/working-out-SWEAT-APP.jpg',
  'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/10/Female_Male_Rope_Workout_1296x728-header-1296x728.jpg?w=1155&h=1528',
  'https://www.eehealth.org/-/media/images/modules/blog/posts/2019/09/working-out.jpg',
  'https://www.sharp.com/health-news/images/Fitness-tips-for-the-non-athlete-HN1471-iStock-922482702-Sized.jpg',
  'https://www.motherhoodthetruth.com/wp-content/uploads/2019/02/working-out-SWEAT-APP.jpg',
];
const pic = 'https://randomuser.me/api/portraits/women/96.jpg';
const img =
  'https://www.wellandgood.com/wp-content/uploads/2019/10/GettyImages-1132086660-599x400.jpg';

const App = () => {
  return (
    <Page barIconColor="dark" backgroundColor="#ffffff">
      <Container marginBottom={4}>
        <SizedBox height={6} />
        <Container
          direction="row"
          horizontalAlignment="space-between"
          verticalAlignment="center"
          paddingHorizontal={6}>
          <TouchWrap padding={3} backgroundColor="#cac9cf" borderRadius={10}>
            <Icon name="bell" size={scaleFont(14)} color="#fff" />
          </TouchWrap>

          <H2 fontSize={16}>HOME</H2>

          <TouchWrap padding={3} backgroundColor="#f2bb23" borderRadius={10}>
            <Icon name="settings" size={scaleFont(14)} color="#fff" />
          </TouchWrap>
        </Container>
      </Container>

      <ScrollArea>
        <Container paddingHorizontal={6}>
          <H2 fontSize={15}>Featured Workouts</H2>
          <SizedBox height={1} />
          <ImageWrap
            url={img}
            backgroundColor="#efefef"
            height={25}
            borderRadius={25}
            overlayColor="#0009">
            <Container flex={1} padding={5} verticalAlignment="flex-end">
              <H2 color="#fff" fontSize={16}>
                Whole Body Workout
              </H2>
              <P color="#fff" font={12}>
                Level 5
              </P>
            </Container>
          </ImageWrap>
        </Container>

        <Container marginTop={4} paddingHorizontal={6}>
          <H2 fontSize={15}>Plan Set</H2>
          <SizedBox height={2} />

          <ScrollArea horizontal={true}>
            <Container direction="row">
              {obj1.map((el, i) => (
                <ImageWrap
                  key={i}
                  url={el}
                  backgroundColor="#efefef"
                  width={38}
                  height={22}
                  marginRight={2}
                  borderRadius={25}
                  overlayColor="#0007">
                  <Container flex={1} padding={5} verticalAlignment="flex-end">
                    <H2 color="#fff" fontSize={11}>
                      Fat Burner
                    </H2>
                    <P color="#fff" fontSize={7}>
                      Level 5
                    </P>
                  </Container>
                </ImageWrap>
              ))}
            </Container>
          </ScrollArea>
        </Container>

        <Container marginTop={4} paddingHorizontal={6}>
          <H2 fontSize={15}>Plan Set</H2>
          <SizedBox height={2} />

          <Container
            direction="row"
            wrap="wrap"
            horizontalAlignment="space-between">
            {obj2.map((el, i) => (
              <ImageWrap
                key={i}
                url={el}
                backgroundColor="#efefef"
                widthPercent="48%"
                height={22}
                marginBottom={2}
                borderRadius={25}
                overlayColor="#0007">
                <Container flex={1} padding={5} verticalAlignment="flex-end">
                  <H2 color="#fff" fontSize={11}>
                    Fat Burner
                  </H2>
                  <P color="#fff" fontSize={7}>
                    Level 5
                  </P>
                </Container>
              </ImageWrap>
            ))}
          </Container>
        </Container>
      </ScrollArea>
    </Page>
  );
};
export default App;
