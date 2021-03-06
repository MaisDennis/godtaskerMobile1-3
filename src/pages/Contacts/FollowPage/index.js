import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
// -----------------------------------------------------------------------------
import {
  AddIcon,
  Container,
  Header, HeaderTabView, HeaderTouchable,
  List,
  SearchBarTextInput,
  Title,
  UpperTabView, UpperTabText,
} from './styles'
import HeaderView from '~/components/HeaderView'
import logo from '~/assets/detective/detective_remake.png'
import Contacts from '~/components/Contacts'
import api from '~/services/api';

export default function FollowPage({ navigation }) {
  const userId = useSelector( state => state.user.profile.id)
  const user_name = useSelector(state => state.user.profile.user_name);
  const contacts_update = useSelector( state => state.contact.profile)

  const [contacts, setContacts] = useState([]);
  const [defaultContacts, setDefaultContacts] = useState([]);
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    loadContacts(userId);
  }, [contacts_update]);

  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
  const todayDate = formattedDate(new Date())

  async function loadContacts(userID) {
    console.tron.log(userID)
    const response = await api.get(`users/${userID}/following`, {
    })
    setContacts(response.data)
    setDefaultContacts(response.data)
    // sorter
    // if(response.data) {
    //   const sortedResponseData = response.data.sort(compare)
    //   setContacts(sortedResponseData)
    //   // setContacts('Hi')
    //   setDefaultContacts(sortedResponseData)
    // }

  }

  function compare(a, b) {
    if (a.worker_name > b.worker_name) {
      return 1;
    }
    if (a.worker_name < b.worker_name) {
      return -1;
    }
    return 0;
  }

  const handleUpdateInput = async (input) => {
    const filteredList = defaultContacts.filter(c => {
      let contactName = c.first_name + c.last_name + c.worker_name
      return contactName.toLowerCase().includes(input.toLowerCase())
    })
    setContacts(filteredList)
    setInputState(input)
  }

  // const renderItem = ({ item, index }) => (
  //   <Contacts key={index} data={item} navigation={navigation}/>
  // );

  function handleCreateContact() {
    navigation.navigate('ContactCreate')
  }



  async function loadWorkers(input) {
    setInputState(input)
    let response = await api.get('/workers', {
      params: {
        nameFilter: `${input}`,
      }
    })
    setContacts(response.data)
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <Header>
        <SearchBarTextInput
          placeholder='Search'
          onChangeText={(input) => loadWorkers(input)}
          returnKeyType='search'
          value={inputState}
        />
        {/* <HeaderTouchable onPress={() => loadContacts(userId)}>
          <AddIcon name='refresh-cw' size={20}/>
        </HeaderTouchable> */}
        <HeaderTouchable onPress={handleCreateContact}>
          <AddIcon name='plus-square' size={21}/>
        </HeaderTouchable>
      </Header>

      <HeaderTabView>
        <UpperTabView>
            <UpperTabText>People</UpperTabText>
        </UpperTabView>
        <UpperTabView>
          <UpperTabText>Clubs</UpperTabText>
        </UpperTabView>
      </HeaderTabView>
      { contacts == ''
        ? (
          <Title>N??o h?? contatos cadastrados.</Title>
        )
        : (
          <List
            data={contacts}
            keyExtractor={item => String(item.phonenumber)}

            renderItem={({ item }) => (
              <Contacts
                key={item.phonenumber}
                data={item}
                navigation={navigation}
              />
              // <SafeAreaView
              //   key={item.phonenumber}
              //   data={item}
              // ><Text>{item.phonenumber}</Text></SafeAreaView>
            )}
          />
        )
      }
    </Container>
  )
}
