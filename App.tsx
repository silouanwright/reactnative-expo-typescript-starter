import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'
import Sup from './components/Sup'

const StyledView = styled.View`
  flex: 1;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
`

const App = () => (
  <StyledView>
    <Sup />
    <Text>Welcome to our App</Text>
  </StyledView>
);

export default App