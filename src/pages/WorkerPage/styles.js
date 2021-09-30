import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export const AddIcon = styled(Icon)`
font-weight: 700;
/* margin: 0 16px; */
color: #000;
`;

export const BioText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  margin: 8px;
  /* background-color: #4433ee; */

`;

export const BlockLarge = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #000;
  margin-bottom: 32px;
  padding: 8px;

  /* background-color: #f5f5f5; */
  /* background-color: #4ee; */
`;

export const BlockLargeBoss = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #009966;
  margin: 0;
  padding: 8px;

  /* background-color: #f5f5f5; */
  /* background-color: #4ee; */
`;

export const BlockLargeWorker = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #334466;
  margin: 0;
  padding: 8px;

  /* background-color: #f5f5f5; */
  /* background-color: #4ee; */
`;

export const BlockSegment = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  margin: 8px auto;
  /* padding: 8px; */

  /* background-color: #f5f5f5; */
  /* background-color: #ee3; */
`;

export const BlockSmallBoss = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  border-radius: 8px;
  border-width: 1px;
  border-color: #009966;
  margin: 0px;
  padding: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #ee2; */
`;

export const BlockSmallWorker = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  border-radius: 8px;
  border-width: 1px;
  border-color: #334466;
  margin: 0px;
  padding: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #ee2; */
`;

export const Container = styled.SafeAreaView`
  height: auto;
  /* padding: 12px 0; */
  background-color: #fff;
  background-color: #ee3;
`;

export const ContentView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 0;
  /* background-color: #f5f5f5; */
  /* background-color: #f5f; */
`;

export const DateText = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: auto 20px;
  color: #000;
  /* background-color: #4433ee; */
`;

export const FirstNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 8px;
`;

export const FollowButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 32px;
  border-radius: 16px;
  margin: auto 8px;
  background-color: #18A0FB;
  /* background-color: #4433ee; */
`;

export const FollowText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const FollowingButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 32px;
  border-radius: 16px;
  border-width: 2px;
  border-color: #18A0FB;
  margin: auto 8px;
  background-color: #fff;

`;

export const FollowingText = styled.Text`
  font-weight: bold;
  color: #18A0FB;
`;

export const FollowersView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50%;
  margin: 0px 8px;
  /* background-color: #f5f5f5; */
  /* background-color: #f5f; */
`;

export const FollowersWrapper = styled.View`
    display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormScrollView = styled.ScrollView`
  height: auto;
  width: 100%;
  /* margin: 12px 0; */
  background-color: #fff;
  /* background-color: #f5f; */
`;

export const Header = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 42px; /* maintain in px. */
width: 100%;
background-color: #fff;
/* background-color: #f5f; */
`;

export const HeaderImage = styled.Image`
height: 30px;
width: 32px;
margin: 0 16px;
/* background: #f00; */
`;

export const HeaderTabView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
width: 95%;
height: 10%;
/* padding: 4px 0; */
margin: 0 auto;
background-color: #fff;
/* background-color: #f5f; */
`;

export const HeaderTouchable = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  center;
  width: 12%;
  /* background-color: #f5f; */
`;

export const Iicon = styled(Icon)`
  color: #18A0FB;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  color: #000;
  /* background-color: #4433ee; */
`;

export const LabelBold = styled.Text`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin: 2px 4px;
  color: #000;
  /* background-color: #4433ee; */
`;

export const LabelBold2 = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin: 2px 4px;
  color: #000;
  /* background-color: #4433ee; */
`;

export const LabelBoldBoss = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 10%;
  color: #009966;
  /* background-color: #4433ee; */
`;

export const LabelBoldBoss2 = styled.Text`
  width: 8px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 30px;
  color: #009966;
  /* background-color: #999; */
`;

export const LabelBoldRed = styled.Text`
  width: 8px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 30px;
  color: #F64C75;
  /* background-color: #999; */
`;

export const LabelBoldWorker = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 10%;
  color: #334466;
  /* background-color: #4433ee; */
`;

export const LabelBoldWorker2 = styled.Text`
  width: 8px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 30px;
  color: #334466;
  /* background-color: #999; */
`;

export const LabelNormal = styled.Text`
  text-align: center;
  font-size: 14px;
  margin: 4px 0;
  color: #000;
  /* background-color: #4ee; */
`;

export const LabelNormalBoss = styled.Text`
  text-align: center;
  font-size: 13px;
  margin: 2px 0;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelNormalWorker = styled.Text`
  text-align: center;
  font-size: 13px;
  margin: 2px 0;
  color: #334466;
  /* background-color: #4ee; */
`;

export const LabelSmall = styled.Text`
  text-align: center;
  font-size: 12px;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #4433ee;
  /* background-color: #4ee; */
`;

export const LabelSmallBoss = styled.Text`
  text-align: center;
  font-size: 12px;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelSmallBoss2 = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelSmallRed = styled.Text`
  text-align: center;
  font-size: 12px;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #F64C75;
  /* background-color: #4ee; */
`;

export const LabelSmallWorker = styled.Text`
  text-align: center;
  font-size: 12px;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #334466;
  /* background-color: #4ee; */
`;

export const LabelSmallWorker2 = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #334466;
  /* background-color: #4ee; */
`;


export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: { padding: 0, margin: 0 },
})`
  height: 100%;
`;

export const MessageButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 28px;
  border-radius: 16px;
  margin: auto 20px;
  background-color: #fff;
  /* background-color: #4433ee; */
`;

export const MessageIcon = styled(Icon)`
  font-size: 24px;
  color: #18A0FB;
`;

export const SearchBarTextInput = styled.TextInput`
  height: 80%;
  width: 50%;
  border-radius: 4px;
  padding: 4px 12px;
  margin: 0 auto;
  background-color: #ddd;
`;

export const SocialMediaView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: flex-start; */
  /* justify-content: space-between; */
  height: 100%;
  width: 40%;
  margin: 8px;
  /* background-color: #f5f5f5; */
    /* background-color: #fee; */
`;

export const SocialMediaWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  width: 90%;
  margin: 8px 0;
  /* background-color: #f5f5f5; */
    /* background-color: #f00; */
`;

export const SpaceView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 24%;
  background-color: #fff;
  background-color: #f5f;
`;

export const StatusCircleBoss = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  /* border-width: 0.5px; */
  /* border-color: #000; */
  margin: 0 auto;
  background-color: #009966;
`;

export const StatusCircleRed = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  /* border-width: 0.5px; */
  /* border-color: #000; */
  margin: 0 auto;
  background-color: #F64C75;
`;

export const StatusCircleWorker = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  /* border-width: 0.5px; */
  /* border-color: #000; */
  margin: 0 auto;
  background-color: #334466;
`;

export const StatusLineBoss = styled.View`
  width: 60px;
  border-width: 0.5px;
  border-color: #009966;
  margin: 0 auto;
`;

export const StatusLineWorker = styled.View`
  width: 60px;
  border-width: 0.5px;
  border-color: #334466;
  margin: 0 auto;
`;

export const StatusView = styled.View`
  /* display: flex; */
  /* flex-direction: row; */
  /* align-items: center; */
  /* justify-content: space-between; */
  height: auto;
  width: 90%;
  margin: 4px 0;
  /* background-color: #f5f5f5; */
    /* background-color: #f00; */
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #999;
  margin: 12px auto 0;
`;

export const UserNameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: auto 8px;
  color: #18A0FB;
`;

export const UserView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: #fff;
  margin: 8px 0 0;
  /* background-color: #999; */
`;

export const UserProfileView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
/* justify-content: space-between; */
height: auto;
width: auto;
margin: 0 20px;
/* background-color: #f5f5f5; */
/* background-color: #f00; */
`;
export const UserImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 70px;
  border-width: 1px;
  border-color: #fff;
  background-color: #f5f5f5;
`;
export const UserImageBackgroundView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 74px;
  width: 74px;
  border-radius: 74px;
  border-width: 2px;
  border-color: #18A0FB;
  background-color: #18A0FB;
`;
export const UserInfoView = styled.View`
display: flex;
flex-direction: column;
width: auto;
margin-left: 8px;
/* background-color: #4433ee; */
`;
export const UserText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
`;
export const UserAboutText = styled.Text`
  font-size: 12px;
  color: #666;
`;
