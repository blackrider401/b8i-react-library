import {TextWrap} from '../../lib/main';
import React from 'react';
import {Platform} from 'react-native';

const fontRegular = 'CircularStd-Book';
const fontSemi = 'CircularStd-Medium';
const fontBold = 'CircularStd-Black';

export const H1 = (props) => (
  <TextWrap fontFamily={fontBold} fontSize={props.fontSize} color={props.color}>
    {props.children}
  </TextWrap>
);

export const H2 = (props) => (
  <TextWrap fontFamily={fontSemi} fontSize={props.fontSize} color={props.color}>
    {props.children}
  </TextWrap>
);

export const P = (props) => (
  <TextWrap
    fontFamily={fontRegular}
    fontSize={props.fontSize}
    color={props.color}>
    {props.children}
  </TextWrap>
);
