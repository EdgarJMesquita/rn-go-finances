import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { Button, ImageContainer, Text, Loading } from "./styles";

type Props = RectButtonProps & {
  title: string;
  svg: React.FC<SvgProps>;
  isLoading?: boolean;
};

export function SignInSocialButton({
  svg: Svg,
  title,
  isLoading,
  ...props
}: Props) {
  return (
    <Button {...props}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      {isLoading && <Loading />}
      {!isLoading && <Text>{title}</Text>}
    </Button>
  );
}
