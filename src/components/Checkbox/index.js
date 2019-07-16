import React from 'react';
import { View, Checkbox } from 'react-native';
// import { Checkbox } from 'galio-framework';

const renderCheckbox = (props) => {
	const { input: { onChange, value } } = props;
	return (
		<View>
			<Checkbox 
				// {...props}
				onValueChange={(value) => onChange(value)}
				value={value}
    	/>
		</View>
	);
};

export { renderCheckbox };