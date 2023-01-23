/* eslint-disable no-undef */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('button 1 adds 1 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button1 = getByTestId('button1');
  
  fireEvent.click(button1);
  
  expect(input.value).toBe('1');
});
test('button 2 adds 2 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button2 = getByTestId('button2');
  
  fireEvent.click(button2);
  
  expect(input.value).toBe('2');
});
test('button 3 adds 3 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button3 = getByTestId('button3');
  
  fireEvent.click(button3);
  
  expect(input.value).toBe('3');
});
test('button 4 adds 4 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button4 = getByTestId('button4');
  
  fireEvent.click(button4);
  
  expect(input.value).toBe('4');
});
test('button 5 adds 5 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button5 = getByTestId('button5');
  
  fireEvent.click(button5);
  
  expect(input.value).toBe('5');
});
test('button 6 adds 6 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button6 = getByTestId('button6');
  
  fireEvent.click(button6);
  
  expect(input.value).toBe('6');
});
test('button 7 adds 7 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button7 = getByTestId('button7');
  
  fireEvent.click(button7);
  
  expect(input.value).toBe('7');
});
test('button 8 adds 8 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button8 = getByTestId('button8');
  
  fireEvent.click(button8);
  
  expect(input.value).toBe('8');
});
test('button 9 adds 9 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button9 = getByTestId('button9');
  
  fireEvent.click(button9);
  
  expect(input.value).toBe('9');
});
test('button 0 adds 0 to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const button0 = getByTestId('button0');
  
  fireEvent.click(button0);
  
  expect(input.value).toBe('0');
});


test('button + adds + to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const buttonPlus = getByTestId('buttonPlus');
  
  fireEvent.click(buttonPlus);
  
  expect(input.value).toBe('+');
});
test('button / adds / to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const buttondivide = getByTestId('buttonDivide');
  
  fireEvent.click(buttondivide);
  
  expect(input.value).toBe('/');
});
test('button * adds * to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const buttonmultiply = getByTestId('buttonMultiple');
  
  fireEvent.click(buttonmultiply);
  
  expect(input.value).toBe('*');
});
test('button - adds - to input', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const buttonSubtract = getByTestId('buttonSubtract');
  
  fireEvent.click(buttonSubtract);
  
  expect(input.value).toBe('-');
});

test('clr button clears input and result', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');
  const clearButton = getByTestId('clear');
  const result = getByTestId('result');
  
  fireEvent.click(clearButton);
  
  expect(input.value).toBe('');
  expect(result.textContent).toBe('Result is : 0');
});
test('input field updates correctly', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('input');

  
  fireEvent.change(input, { target: { value: '5+8' } });

  
  expect(input.value).toBe('5+8');
});
