import React from 'react';
import { View, CheckBox, Text } from 'react-native';
// import { Checkbox } from 'galio-framework';

const renderCheckbox = ({ input }) => {
	const { onChange, value } = input;
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center'
			}}
		>
			<CheckBox
				onValueChange={(value) => {
					onChange(value);
				}}
				value={!!value}
			/>
			<Text
				h6
			>
				Remember me
			</Text>
		</View>
	);
};

export { renderCheckbox };