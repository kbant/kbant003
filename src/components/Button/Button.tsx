import {styled} from 'nativewind';
import {ReactNode} from 'react';
import {Pressable, PressableProps, Text, TextProps, View} from 'react-native';
import {StyledPrimaryText, StyledComponentText} from './Button.styles';

interface MyButtonProps extends PressableProps {
  variant: string;
  style?: TextProps['style'];
  children: ReactNode;
}

export default function MyButton({
  variant,
  style,
  children,
  ...props
}: MyButtonProps) {
  return (
    <Pressable {...props}>
      <StyledPrimaryText>{children}</StyledPrimaryText>
      <StyledComponentText variant="secondary">{children}</StyledComponentText>
      <StyledComponentText variant={variant}>{children}</StyledComponentText>
    </Pressable>
  );
}
