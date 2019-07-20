import React from 'react';
import { DatePicker, Text as NativeBaseText } from 'native-base';
import { Block,  Icon } from 'galio-framework';

const renderDatePicker = (
  {
    input,
    placeholder,
    defaultValue,
    meta: { touched, error },
    label,
    ...customElements
  }
) => (
<Block
  row
  style={{
    alignItems: 'center',
    paddingLeft: 8
  }}
>
  <NativeBaseText
    style={{
      paddingTop: 10,
      paddingBottom: 10
    }}
  >
    {label}
  </NativeBaseText>
  <DatePicker
    defaultDate={new Date()}
    minimumDate={new Date(2018, 1, 1)}
    maximumDate={new Date(2020, 12, 31)}
    locale={"en"}
    timeZoneOffsetInMinutes={undefined}
    modalTransparent={false}
    animationType={"fade"}
    androidMode={"calendar"}
    placeHolderText={<Icon name="calendar" family="AntDesign" color='blue' size={14} />}
    textStyle={{ color: "green" }}
    placeHolderTextStyle={{ color: "black" }}
    onDateChange={input.onChange}
    disabled={false}
  />
</Block>
);

export { renderDatePicker };