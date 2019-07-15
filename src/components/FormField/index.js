import React from 'react';
import { TextInput, View } from 'react-native';
import { Input } from 'galio-framework';

const renderField = (props) => (
	<View>
		<Input
			{...props}
		/>
	</View>
);

export { renderField };