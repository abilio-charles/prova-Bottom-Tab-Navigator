import React from 'react';
import { Container, ItemText } from '../styles/ListScreenStyles';
import { FlatList } from 'react-native';

const data = [
  { key: 'Item 1' },
  { key: 'Item 2' },
  { key: 'Item 3' },
  { key: 'Item 4' },
];

export default function ListScreen() {
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemText>{item.key}</ItemText>}
      />
    </Container>
  );
}
