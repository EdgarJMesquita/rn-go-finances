import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/theme";

export const Button = styled(RectButton)`
	flex-direction: row;
	height: ${RFValue(56)}px;
	background-color: ${({theme})=>theme.colors.shape};

	border-radius: 5px;

	align-items: center;
	
	margin-bottom: 16px;
`;

export const ImageContainer = styled.View`
	height: 100%;
	justify-content: center;
	align-items: center;

	padding: ${RFValue(16)}px;
	border-right-width: 1px;
	border-right-color: ${({theme})=>theme.colors.background  };

`;

export const Text = styled.Text`
	flex: 1;
	text-align: center;

	font-family: ${({theme})=>theme.fonts.medium};

	font-size: ${RFValue(14)}px;
`;

export const FooterWrapper = styled.View`
	margin-top: ${RFPercentage(-4)}px;
	padding: 0 32px;
	justify-content: space-between;
`;

export const Loading = styled(ActivityIndicator).attrs({
	size: 20,
	color: theme.colors.primary
} as ActivityIndicatorProps)`
	flex: 1;
`;

