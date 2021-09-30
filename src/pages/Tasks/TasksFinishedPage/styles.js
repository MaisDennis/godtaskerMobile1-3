import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
`;

export const Title3 = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  color: #888;
  margin: auto;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 5 },
})`
  height: 100%;
`;
