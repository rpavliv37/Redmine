import React from 'react';
import { TextInput, View } from 'react-native';
import SelectMultiple from 'react-native-select-multiple'

const renderMultiplySelect = (props) => {
	const { input: { onChange, value, ...inputProps }, renderLabel, watchers } = props;
	return (
		<View>
			<SelectMultiple
        items={watchers}
        renderLabel={renderLabel}
        // selectedItems={this.state.selectedFruits}
        onSelectionsChange={input.onChange}
      />
		</View>
	);
};

export { renderMultiplySelect };