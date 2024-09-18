import React from "react";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Dimensions, Animated } from "react-native";

export const Container = styled.View`
  height: 100%;
  padding: 20px;
  padding-top: ${({ full }) => (full ? 20 : 20 + getStatusBarHeight())}px;
  background: ${({ theme }) => theme.body};
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.text};
`;

export const TexProduto = styled.Text`
  color: ${({ theme }) => theme.text};
`;

export const ScrollView = styled.ScrollView``;

export const View = styled.View``;

export const Card = styled.View`
  border-radius: 4px;
  padding: 16px;
  background: ${({ theme }) => theme.nav};
`;

export const CardProduto = styled.View`
  border-radius: 20px;
  padding: 16px;
  background: ${({ theme }) => theme.nav};
`;

export const CardPedido = styled.View`
  border-radius: 20px;
  padding: 16px;
  background: ${({ theme }) => theme.nav};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

export const StyledView = styled.View.attrs({
  elevation: 2,
})`
  width: 100%;
  background: ${({ theme }) => theme.nav};
  margin: 10px 0;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  align-self: flex-start;
  /* border: 2px solid ${(props) => (props.error ? "#FF7272" : "#FFf")}; */
`;

export const ButtonBase = styled.TouchableHighlight.attrs({
  underlayColor: "#42A1DE",
})`
  background: #167fc2;
  padding: 10px 20px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;

export const Button = ({ title, onPress }) => {
  const Text = styled.Text`
    color: #fff;
    text-align: center;
  `;
  return (
    <ButtonBase activeOpacity={0.8} onPress={onPress}>
      <Text>{title}</Text>
    </ButtonBase>
  );
};

export const ButtonCard = ({ title, onPress }) => {
  const ButtonContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
  })`
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.toggleBorder};
    padding: 16px;
    width: 160px;
    height: 100px;
    justify-content: space-between;
    margin: 0px 10px;
  `;
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name="md-add"
        size={24}
        color="#167fc2"
        style={{ marginBottom: 10 }}
      />
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export const Fab = ({ children, onPress }) => {
  const FabContainer = styled.TouchableHighlight.attrs({
    underlayColor: "#42A1DE",
    elevation: 2,
  })`
    background: #167fc2;
    width: 56px;
    height: 56px;
    border-radius: 50px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  `;
  return (
    <FabContainer onPress={onPress}>
      <Ionicons name="md-add" size={24} color={"#fff"} />
    </FabContainer>
  );
};

export const Fabtn = ({ children, onPress }) => {
  const FabContainer = styled.TouchableHighlight.attrs({
    underlayColor: "#42A1DE",
    elevation: 2,
  })`
    background: #167fc2;
    width: 56px;
    height: 56px;
    border-radius: 50px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  `;
  return (
    <FabContainer onPress={onPress}>
      <MaterialCommunityIcons name="check" size={24} color={"#fff"} />
    </FabContainer>
  );
};

export const BottomSheetModal = ({ children, header, show, close }) => {
  const aniVal = new Animated.Value(1000);
  const headerHeight = React.useRef();

  React.useEffect(() => onOpen(), [show]);

  const onOpen = () => {
    console.log(children.length);

    Animated.spring(aniVal, {
      toValue: 0,
      velocity: 10,
      tension: 5,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };
  const onClose = () => {
    Animated.timing(aniVal, {
      toValue: 1000,
      velocity: 10,
      tension: 5,
      friction: 8,
      duration: 200,
      useNativeDriver: true,
    }).start(({ finished }) => finished && close());
  };

  const Modal = styled.Modal``;
  const BackDrop = styled.View`
    margin: 0;
    width: ${Dimensions.get("window").width}px;
    height: 100%;
    /* height: ${Dimensions.get("window").height}px; */
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
  `;
  const Card = styled.View`
    bottom: 0;
    position: absolute;
    height: 30%;
    background: ${({ theme }) => theme.nav};
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 9;
  `;
  const CardAnimated = Animated.createAnimatedComponent(Card);
  const Header = styled.View`
    padding: 16px;
    padding-right: 20px;
    border-bottom-color: ${({ theme }) => theme.body};
    border-bottom-width: 1px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  `;
  const CloseButtonContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5,
  })`
    width: 36px;
    height: 36px;
    justify-content: center;
    align-items: center;
    margin: -10px;
  `;
  const CloseButton = styled(Ionicons).attrs(({ theme }) => ({
    color: theme.text,
  }))``;

  return (
    <Modal
      visible={show}
      onRequestClose={onClose}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <BackDrop>
        <CardAnimated style={{ transform: [{ translateY: aniVal }] }}>
          <Header>
            {header}
            <CloseButtonContainer onPress={onClose}>
              <CloseButton name="md-close" size={24} />
            </CloseButtonContainer>
          </Header>
          <ScrollView>{children}</ScrollView>
        </CardAnimated>
      </BackDrop>
    </Modal>
  );
};

export const ListItem = ({
  children,
  leftIcon,
  rightIcon,
  leftSpace,
  rightSpace,
  onPress,
}) => {
  const ListItemContainer = styled.TouchableHighlight.attrs({
    underlayColor: "rgba(0,0,0,.1)",
  })`
    padding: 16px;
    height: 56px;
    justify-content: space-between;
    flex-direction: row;
  `;
  const ChildrenContainer = styled.View`
    justify-content: center;
    flex: 1;
  `;
  const IconContainer = styled.View`
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  `;
  const Icon = styled(Ionicons).attrs(({ theme }) => ({
    color: theme.icon,
  }))``;
  const componentOrString = (element) => {
    if (typeof element == "string") return <Icon name={element} size={24} />;
    else return element;
  };
  return (
    <ListItemContainer onPress={onPress}>
      <>
        {(leftIcon || leftSpace) && (
          <IconContainer style={{ marginRight: 16 }}>
            {componentOrString(leftIcon)}
          </IconContainer>
        )}
        <ChildrenContainer>
          <Text>{children}</Text>
        </ChildrenContainer>
        {(rightIcon || rightSpace) && (
          <IconContainer style={{ marginLeft: 16 }}>
            {componentOrString(rightIcon)}
          </IconContainer>
        )}
      </>
    </ListItemContainer>
  );
};
