import React from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'galio-framework';

const renderCheckbox = ({ input }) => {
	const { onChange, value } = input;
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center'
			}}
		>
			<Checkbox
				onChange={(value) => {
					onChange(value);
				}}
				value={!!value}
				label='Remember me'
				color='#45df31'
			/>
		</View>
	);
};

export { renderCheckbox };