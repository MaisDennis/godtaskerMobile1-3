import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import Contacts from '~/components/Contacts'
import api from '~/services/api';

export default function ContactsPage({ navigation }) {
  const contacts_update = useSelector( state => state.contact.profile)
  const [contacts, setContacts] = useState([]);
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    loadWorkers('');
  }, [contacts_update]);

  // function handleCreateContact() {
  //   navigation.navigate('ContactCreate')
  // }

  async function loadWorkers(input) {
    setInputState(input)
    const response = await api.get('/workers', {
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
        <HeaderTouchable onPress={() => loadWorkers('')}>
          <AddIcon name='refresh-cw' size={20}/>
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
          <Title>Let's Search!</Title>
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
