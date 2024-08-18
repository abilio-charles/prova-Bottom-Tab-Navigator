import React, { useState } from 'react';
import { Container, Input, ButtonContainer, ResultText } from '../styles/CalculatorScreenStyles';
import { Button } from 'react-native';

export default function CalculatorScreen() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    setResult(parseFloat(value1) + parseFloat(value2));
  };

  return (
    <Container>
      <Input
        keyboardType="numeric"
        placeholder="Enter first number"
        value={value1}
        onChangeText={setValue1}
      />
      <Input
        keyboardType="numeric"
        placeholder="Enter second number"
        value={value2}
        onChangeText={setValue2}
      />
      <ButtonContainer>
        <Button title="Calculate" onPress={calculateSum} />
      </ButtonContainer>
      {result !== null && <ResultText>Result: {result}</ResultText>}
    </Container>
  );
}
