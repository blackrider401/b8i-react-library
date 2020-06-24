import React from 'react';
import { View, Text } from 'react-native';

interface PageProps {
  fontSize?: number,
  textAlign?: 'left' | 'center' | 'right',
  children: React.ReactNode,
}

export const Page = ({ ...props }: PageProps) => {
  return (
    <View>
      <Text style={{ fontSize: props.fontSize || 80, textAlign: props.textAlign }}>Hello World</Text>
    </View>
  );
};
