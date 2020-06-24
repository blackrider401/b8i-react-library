// @flow

import React from 'react';
import {
  View,
  Text,
  PixelRatio,
  ImageBackground,
  Dimensions,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export const scaleFont = (val) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 7;
};

const Elevation = (elevation) => {
  let response = {};
  elevation == null || undefined
    ? (response = {})
    : (response = {
        elevation,
        shadowColor: '#0001',
        shadowOffset: {width: 0, height: elevation * 0.6},
        shadowOpacity: 0.8,
        shadowRadius: elevation * 0.5,
      });
  return response;
};

export const Height = (val) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * height);
  return res;
};

export const Width = (val) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

/**ANCHOR INTERFACES */
interface GeneralProps {
  style: any;
  backgroundColor: any;
}

interface MarginProps {
  margin: number;
  marginRight: number;
  marginLeft: number;
  marginTop: number;
  marginBottom: number;
  marginVertical: number;
  marginHorizontal: number;
}

interface PaddingProps {
  padding: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  paddingVertical: number;
  paddingHorizontal: number;
}

interface BorderRadiusProps {
  borderRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
}

interface BorderWidth {
  borderBottomWidth: number;
  borderTopWidth: number;
  borderLeftWidth: number;
  borderRightWidth: number;
  borderWidth: number;
  borderColor: any;
}

interface HeightWidthProps {
  maxWidth: any;
  maxHeight: any;
  minWidth: any;
  minHeight: any;
  height: number;
  width: number;
  widthPercent: any;
}

/**ANCHOR TextWrap */
interface TextWrapProps {
  numberOfLines: number;
  color: string;
  fontFamily: string;
  fontWeight: 'bold' | 'medium' | 'regular';
  fontSize: number;
  lineHeight: number;
  text: string;
  textAlign: 'center' | 'left' | 'right';
  children: React.ReactNode;
}

export const TextWrap = ({...props}: TextWrapProps & GeneralProps) => {
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={props.numberOfLines}
      ellipsizeMode="tail"
      style={[
        {
          fontWeight: props.fontWeight,
          color: props.color,
          fontSize: scaleFont(props.fontSize) || scaleFont(25),
          lineHeight:
            scaleFont(props.lineHeight) ||
            scaleFont(props.fontSize) ||
            scaleFont(25),
          fontFamily: props.fontFamily,
          textAlign: props.textAlign,
        },
        props.style,
      ]}>
      {props.children || props.text}
    </Text>
  );
};

/**ANCHOR CONTAINER */
interface ContainerProps {
  flexGrow: number;
  overflow: boolean;
  opacity: number;
  position: any;
  elevation: number;
  direction: 'row' | 'column' | 'row-reverse';
  wrap: 'wrap';
  flex: number;
  verticalAlignment: 'flex-start' | 'center' | 'flex-end';
  horizontalAlignment:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-evenly';
  alignSelf: 'flex-start' | 'center' | 'flex-end';
  backgroundColor: any;
  style: object;
  children: React.ReactNode;
}

export const Container = ({
  ...props
}: ContainerProps &
  GeneralProps &
  HeightWidthProps &
  PaddingProps &
  MarginProps &
  BorderRadiusProps &
  BorderWidth) => {
  return (
    <View
      style={[
        {
          flexGrow: props.flexGrow,
          overflow: props.overflow,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.direction,
          alignSelf: props.alignSelf,
          flexWrap: props.wrap,
          flex: props.flex,
          height: Height(props.height),
          width: Width(props.width) || props.widthPercent,
          justifyContent:
            props.direction === 'row'
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.direction === 'row'
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: Width(props.margin),
          marginVertical: Height(props.marginVertical),
          marginHorizontal: Width(props.marginHorizontal),
          paddingVertical: Height(props.paddingVertical),
          paddingHorizontal: Width(props.paddingHorizontal),
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
          marginTop: Height(props.marginTop),
          marginBottom: Height(props.marginBottom),
          paddingRight: Width(props.paddingRight),
          paddingLeft: Width(props.paddingLeft),
          paddingTop: Height(props.paddingTop),
          paddingBottom: Height(props.paddingBottom),
          padding: Width(props.padding),
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

/* ANCHOR AVATAR */

interface AvatarProp {
  borderWidth: number;
  borderColor: any;
  url: string;
  source: any;
  elevation: number;
  size: number;
  backgroundColor: any;
  position: 'absolute' | 'relative';
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export const Avatar = ({...props}: AvatarProp & GeneralProps & MarginProps) => {
  return (
    <View
      style={[
        {
          ...Elevation(props.elevation),
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
          height: Width(props.size),
          width: Width(props.size),
          backgroundColor: props.backgroundColor,
          borderRadius: Width(props.size) / 2,
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
          marginTop: Width(props.marginTop),
          marginBottom: Width(props.marginBottom),
        },
      ]}>
      <ImageBackground
        source={props.source || {uri: props.url}}
        resizeMode="cover"
        style={[
          styles.overflow,
          {
            height: Width(props.size),
            width: Width(props.size),
            borderRadius: Width(props.size) / 2,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
          },
        ]}
      />
    </View>
  );
};

/* ANCHOR SIZED BOX */
interface SizedBoxProps {}

export const SizedBox = ({
  ...props
}: SizedBoxProps & GeneralProps & HeightWidthProps) => {
  return (
    <View
      style={{
        width: Width(props.width),
        height: Height(props.height),
        backgroundColor: props.backgroundColor,
      }}
    />
  );
};

/* ANCHOR SCROLL AREA */

interface ScrollAreaProps {
  horizontal: boolean;
  flexGrow: number;
  children: React.ReactNode;
}

export const ScrollArea = ({...props}: ScrollAreaProps) => (
  <ScrollView
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={{flexGrow: props.flexGrow}}
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
    {props.children}
  </ScrollView>
);

/* ANCHOR  STYLES*/
const styles = StyleSheet.create({
  overflow: {overflow: 'hidden'},
  flex: {flex: 1},
  input: {paddingLeft: 0, fontWeight: Platform.OS === 'ios' ? 'bold' : null},
  rounded: {justifyContent: 'center', alignItems: 'center'},
});
