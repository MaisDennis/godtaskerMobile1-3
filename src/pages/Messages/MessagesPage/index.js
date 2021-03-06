import React, { useState, useEffect } from 'react';
import { Alert, TouchableOpacity, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { Swipeable } from 'react-native-gesture-handler';
// -----------------------------------------------------------------------------
import {
  AddIcon,
  Container,
  Header, HeaderTabView, HeaderTouchable,
  List,
  SearchBarTextInput,
  // TestText, TestView,
  Title,
} from './styles';
import Messages from '~/components/Messages';
import api from '~/services/api';
import firebase from '~/services/firebase'
// -----------------------------------------------------------------------------
export default function MessagesPage({ navigation, route }) {
  const user_id = useSelector(state => state.user.profile.id);
  const workerID = useSelector(state => state.worker.profile.id);
  const messages_update = useSelector(state => state.message.profile);

  const [messages, setMessages] = useState([]);
  const [defaultMessages, setDefaultMessages] = useState();
  const [defaultTasks, setDefaultTasks] = useState();
  const [inputState, setInputState] = useState();
  const [lastMessageTime, setLastMessageTime] = useState();

  useEffect(() => {
    // loadTasks('', user_id);
    loadMessages()
  }, [ messages_update ]);

    async function loadMessages() {
      const messagesResponse = await api.get(`messages/${user_id}`)
      const Data = messagesResponse.data
      Data.sort(compare);

      setMessages(Data)
      setDefaultMessages(Data)
    }


    async function loadTasks(workerNameFilter, userID) {
    let response = []
    const workerResponse = await api.get(`tasks/unfinished`, {
      params: { workerID },
    });
    const userResponse = await api.get(`tasks/user/unfinished`, {
      params: { workerNameFilter, userID }
    })
    response = [... workerResponse.data, ... userResponse.data]
    // console.log(response)
    // response.map(r => {
    //   getPhoto(r.phonenumber)
    // })

    // remove duplicates
    const seen = new Set()
    const filteredResponse = response.filter(a => {
      const duplicate = seen.has(a.id)
      seen.add(a.id)
      return !duplicate
    })
    filteredResponse.sort(compare);
    // console.log(filteredResponse.length)

    setTasks(filteredResponse);
    setDefaultTasks(filteredResponse);
  }

  function compare(a, b) {
    if (a.messaged_at > b.messaged_at) {
      return -1;
    }
    if (a.messaged_at < b.messaged_at) {
      return 1;
    }
    return 0;
  }

  const handleUpdateInput = async (input) => {
    const filteredList = defaultMessages.filter(t => {
      let messageSearch = t.name + t.worker.worker_name
      return messageSearch.toLowerCase().includes(input.toLowerCase())
    })
    setMessages(filteredList)
    setInputState(input)
  }

  const LeftActions = () => {
    <HeaderTabView>
      <Title>Hello</Title>
    </HeaderTabView>
  }
  // -----------------------------------------------------------------------------
  return (
    <Container>
      <Header>
        <SearchBarTextInput
          placeholder='Search'
          onChangeText={handleUpdateInput}
          value={inputState}
        />
        <HeaderTouchable
          // onPress={() => loadTasks('', user_id)}
          onPress={() => loadMessages()}
        >
          <AddIcon name='refresh-cw' size={21}/>
        </HeaderTouchable>
      </Header>
      {/* <HeaderTabView>
        <UpperTabView>
        <TouchableOpacity onPress={() => loadTasks('', user_id)}>
            <UpperTabText>atualizar</UpperTabText>
          </TouchableOpacity>
        </UpperTabView>
      </HeaderTabView> */}
      { messages == ''
        ? (
          <Title>N??o h?? conversas em aberto.</Title>
        )
        : (
          <>
            <List
              // data={tasks}
              data={messages}
              keyExtractor={item => String(item.id)}
              renderItem={({ item, index }) => (
                <Swipeable
                  renderLeftActions={LeftActions}
                  onSwipeableLeftOpen={() => Alert.alert('Hi')}
                >
                  {/* <TestView styles={{backgroundColor: '#999'}}>
                    <TestText>2222222</TestText>
                  </TestView> */}
                <Messages
                  key={index}
                  data={item}
                  navigation={navigation}
                />
                </Swipeable>
              )}
            />
          </>
        )
      }
    </Container>
  );
}
