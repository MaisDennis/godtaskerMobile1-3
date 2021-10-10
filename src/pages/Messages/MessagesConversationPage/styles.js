import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  KeyboardAvoidingView,
  SafeAreaView, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const AlignView = styled.View`
display: flex;
flex-direction: column;
width: 100%;
background-color: #fff;
background-color: #FFFCB6;
`;

export const BodyView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
/* height: 72px; */
height: 100%;
padding: 12px;
background-color: #fff;
/* background-color: #73c479; */
`;

export const Container = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  /* background: #F5F5; */
`;
export const ConversationView = styled(KeyboardAvoidingView)`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
overflow: scroll;
/* margin-bottom: 40%; */
/* background-color: #4433ee; */
`;

export const ForwardOnTopView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* height: auto; */
  width: 100%;
  border-radius: 4px;
  margin: 0 4px;
  padding: 0 4px;
  /* background-color: #f00; */
`;
export const ForwardText = styled.Text`
  font-style: italic;
  margin-left: 4px;
  color: #666;
`;

export const Header = styled.View`
display: flex;
flex-direction: row;
align-items: center;
height: 10%;
min-height: 70px;
width: 100%;
z-index: 100;
/* background-color: #ee3; */
`;

export const HrLine = styled.View`
width: 90%;
border-width: 0.5px;
border-color: #ddd;
margin: 0 auto;
`;

export const HrDivider = styled.View`
width: 100%;
border-width: 0.5px;
border-color: #ddd;
margin: 0 auto;
`;

export const ImageBackgroundView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 44px;
  border-width: 1px;
  border-color: #18A0FB;
  background-color: #fff;
`;

export const Image = styled.Image`
height: 40px;
width: 40px;
border-radius: 40px;
background-color: #f5f5f5;

`;

export const LineView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
margin: 8px 12px;
/* background-color: #4433ee; */
`;

export const MessageBottomView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding: 4px;
  margin: 4px;
  /* background-color: #ee3; */
`;

export const MessageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: ${ props => props.inverted === true
    ? (
      (props.sender === 'worker') ? 'flex-end' : 'flex-start'
    )
    : (
      (props.sender === 'worker') ? 'flex-start' : 'flex-end'
    )
  };
  width: 100%;
  margin: 0;
  /* background-color: #44cc33; */
`;

export const MessageIcon = styled(Icon)`
font-size: 16px;
margin-left: 8px;
/* margin-right: 8px; */
color: #666;
`;

export const MessageListButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  height: 36px;
  padding: 0 4px;
  margin: 4px 0;
  /* background-color: #f44; */
`;
export const MessageListItemText = styled.Text`
font-weight: bold;
color: #18A0FB;
text-align: left;
margin: 0 auto;
`;
export const MessageListItemView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 32px;
  padding: 0 12px;
  border-width: 1px;
  border-color: #18A0FB;
  background-color: #fff;
`;

export const MessageListView = styled.View`
  display: flex;
  flex-direction: row;

  margin-top: 8px;
  /* background-color: #44cc; */
`;

export const MessageText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  font-style: ${
    props => props.removedMessage ? 'italic' : 'normal'
  };
  color: ${
    props => props.removedMessage ? '#666' : '#000'
  };
  max-width: 93%;
  padding: 0 4px;
  /* background-color: #666; */
`;

export const MessageTime = styled.Text`
font-size: ${Platform.OS === 'ios' ? '11px' : '10px'};
max-width: 70px;
width: auto;
margin: 4px;
color: #000;
/* background-color: #4ee; */
`;

export const InnerStatusView = styled(LinearGradient)`
  height: 8px;
  border-radius: 16px;
  /* background-color: #f3c775; */
`;

export const MessageView = styled(LinearGradient)`
display: flex;
flex-direction: column;
align-items: flex-end;
max-width: 80%;
border-radius: 16px;
padding: 4px;
margin: 0;
/* background-color: #4ee; */
`;

export const MessageViewUser = styled(LinearGradient)`
display: flex;
flex-direction: column;
align-items: flex-end;
max-width: 80%;
border-radius: 16px;
padding: 4px;
margin: 0;
/* background-color: #4ee; */
`;

export const MessageWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  /* background-color: #4ee; */
`;

// export const ParsedKeyboardAvoidingView = styled.KeyboardAvoidingView`
// display: flex;
// flex-direction: column;
// align-items: center;
// height: auto;
// width: 100%;
// background-color: #4433ee;
// `;

export const ReplyContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: auto; */
  width: 100%;
  margin: 0;
  background-color: #f00;
`;
export const ReplyView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* height: 48px; */
  height: auto;
  width: 100%;
  padding: 0 8px;
  margin: 0;
  background-color: #fff;
`;

export const ReplyOnTopView = styled.View`
display: flex;
flex-direction: column;
align-self: center;
width: 95%;
border-radius: 4px;
margin: 8px 0 4px;
padding: 4px;
background-color: #fff;
/* background-color: #4433ee; */
`;
export const ReplyNameText = styled.Text`
  color: #f3c775;
`;
export const ReplyOnTopText = styled.Text``;

export const SenderView = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
  /* background-color: #4433ee; */
`;

export const SenderText = styled.Text`
  font-weight: 700;
  max-width: 70%;
  padding: 4px 0;
  color: ${props => props.userIsWorker
    ? '#009966'
    : '#334466'
  };
`;
export const SenderAboutText = styled.Text`
  overflow: hidden;
  font-size: 12px;
  color: #666;
  max-height: 21px;
  max-width: 70%;
  margin: 0;
  /* background-color: #334466; */
`;

export const SendInput = styled.TextInput`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  min-height: 40px;
  width: 80%;
  border-radius: 16px;
  border-width: 1px;
  border-color: #000;
  margin: 16px 0;
  padding: 0px 20px;
  background-color: #ddd;
`;

export const SendButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid #fff;
  border-radius: 40px;
  margin: 0;
  background-color: #000;
`;
export const SendIcon = styled(Icon)`
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  color: #fff;
`;

export const SendButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 36px;
  border: 1px solid #000;
  margin: 0;
  /* background-color: #4ee; */
`;

export const SpaceView = styled.View`
  height: 32px;
  width: 32px;
  border-radius: 32px;
`;

export const TemporaryMessageContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 8px;
  background-color: #f5f5f5;
`;
export const TemporaryMessageView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 90%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #999;
  padding: 6px 20px;
  background-color: #fff;
  /* background-color: #f00; */
`;
export const TemporaryMessageText = styled.Text`
  color: #000;
  text-align: left;
  margin: 0 auto;
`;

export const TemporaryMessageIcon = styled(Icon)`
  font-size: 21px;
  color: #AE1919;
  /* background-color: #fff; */
`;
export const TemporaryMessageIconView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  /* background-color: #999; */
`;
