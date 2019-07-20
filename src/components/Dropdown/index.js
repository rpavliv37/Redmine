import React from 'react';
import { Picker } from 'react-native';

const renderDropdown = (props) => {
  const { input: { onChange, value, ...inputProps }, children, ...pickerProps } = props;
	return (
    <Picker
      style={{ height: 50, width: 'auto' }}
      selectedValue={ value }
      onValueChange={value => {
        requestAnimationFrame(() => {
          onChange(value);
        });
      }}
      { ...inputProps }
      { ...pickerProps }
    >
      {children}
    </Picker>
	);
};

export { renderDropdown };
