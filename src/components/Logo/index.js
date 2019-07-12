import React from 'react';
import { Image } from 'react-native-elements';
import { Block } from 'galio-framework';

const Logo = () => (
	<Block>
		<Image
			source={{uri: 'https://indeema.com/img/social_logo_400x400_white.png'}}
			style={{ width: 200, height: 200 }}
 		/>
	</Block>
);

export default Logo;