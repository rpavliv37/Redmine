import React from 'react';
import { TextInput, View } from 'react-native';
import { Input } from 'galio-framework';

const renderField = (props) => {
	const { input: { onChange }, input } = props;
	console.log('input', input);
	return (
		<View>
			<Input
				{...props}
				onChangeText={onChange}
			/>
		</View>
	);
};

export { renderField };