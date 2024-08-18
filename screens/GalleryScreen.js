import React from 'react';
import { Container, StyledImage } from '../styles/GalleryScreenStyles';
import { ScrollView } from 'react-native';

export default function GalleryScreen() {
  return (
    <ScrollView contentContainerStyle={Container}>
      <StyledImage source={{ uri: 'https://via.placeholder.com/150' }} />
      <StyledImage source={{ uri: 'https://via.placeholder.com/150' }} />
      <StyledImage source={{ uri: 'https://via.placeholder.com/150' }} />
    </ScrollView>
  );
}
