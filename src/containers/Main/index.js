import React from 'react';
import {Picker, TouchableOpacity, ScrollView } from 'react-native';
import Expand from 'react-native-simple-expand';
import { Input, Button, Card, Block, Text, Icon, Navbar } from 'galio-framework';
import '@expo/vector-icons';

export default class Main extends React.Component {
	static navigationOptions = {
    title: 'Main',
  };
  constructor(props) {
    super(props);
		this.state = {
    }
	}
	
	setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
	render() {
		const state = this.state;
		const {navigate} = this.props.navigation;
    return (
			<ScrollView>
				<Block
					style={{
						backgroundColor: '#fff',
						flex: 1,
						paddingLeft: 20,
						paddingRight: 20
					}}
				>
					<Block
						right
					>
						<Text
							h4
						>
							Today spent time: 8h
						</Text>
					</Block>
					<Block
						style={{
							paddingTop: 10
						}}
					>
					<TouchableOpacity
						onPress={() => this.setState({ open: !this.state.open })}
					>
						<Block
							row
							style={{
								justifyContent: 'flex-start',
								alignItems: 'center'
							}}
						>
							<Icon name={this.state.open ? "caretdown" : "caretright"} family="AntDesign" color='blue' size={14} />
							<Text
								h5
								bold
							>
								Filters
							</Text>
						</Block>
					</TouchableOpacity>
						<Expand value={this.state.open}>
							<Picker
								selectedValue={this.state.language}
								style={{height: 50, width: 'auto'}}
								onValueChange={(itemValue, itemIndex) =>
									this.setState({language: itemValue})}
							>
								<Picker.Item label="Status" value="java" />
								<Picker.Item label="Project" value="js" />
							</Picker>
							<Picker
							selectedValue={this.state.language}
							style={{height: 50, width: 'auto'}}
							onValueChange={(itemValue, itemIndex) =>
								this.setState({language: itemValue})}
						>
							<Picker.Item label="Project" value="java" />
							<Picker.Item label="JavaScript" value="js" />
						</Picker>
						</Expand>
					</Block>
					<Block
						right
						style={{
							marginBottom: 10,
							marginTop: 10
						}}
					>
						<Button
							radius={27}
							shadowColor
							color='info'
							icon='pluscircle'
							iconFamily='AntDesign'
							iconColor='white'
							size='small'
						>
							Add new Issue
						</Button>
					</Block>
					<Block
						borderWidth={1}
						style={{
							backgroundColor: '#6c757c',
							borderColor: 'rgba(0, 0, 0, 0.125)',
							borderRadius: 20,
							marginBottom: 15
						}}
					>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20,
								backgroundColor: '#677178',
								borderBottomWidth: 1,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								borderBottomColor: 'rgba(0, 0, 0, 0.125)'
							}}
						>
							<Text
								h5
								style={{
									paddingBottom: 5,
									color: 'white'
								}}
							>
								Bug #123456
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Status: New
							</Text>
							<Text
								color='white'
							>
								Priority: Low
							</Text>
						</Block>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Pellentesque finibus fringilla nibh ac sollicitudin.
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Updated: 12/12/2019
							</Text>
							<Text
								color='blue'
							>
								More details >>
							</Text>
						</Block>
					</Block>
					<Block
						borderWidth={1}
						style={{
							backgroundColor: '#6c757c',
							borderColor: 'rgba(0, 0, 0, 0.125)',
							borderRadius: 20,
							marginBottom: 15
						}}
					>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20,
								backgroundColor: '#677178',
								borderBottomWidth: 1,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								borderBottomColor: 'rgba(0, 0, 0, 0.125)'
							}}
						>
							<Text
								h5
								style={{
									paddingBottom: 5,
									color: 'white'
								}}
							>
								Bug #123456
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Status: New
							</Text>
							<Text
								color='white'
							>
								Priority: Low
							</Text>
						</Block>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Pellentesque finibus fringilla nibh ac sollicitudin.
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Updated: 12/12/2019
							</Text>
							<Text
								color='blue'
							>
								More details >>
							</Text>
						</Block>
					</Block>
					<Block
						borderWidth={1}
						style={{
							backgroundColor: '#6c757c',
							borderColor: 'rgba(0, 0, 0, 0.125)',
							borderRadius: 20,
							marginBottom: 15
						}}
					>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20,
								backgroundColor: '#677178',
								borderBottomWidth: 1,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								borderBottomColor: 'rgba(0, 0, 0, 0.125)'
							}}
						>
							<Text
								h5
								style={{
									paddingBottom: 5,
									color: 'white'
								}}
							>
								Bug #123456
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Status: New
							</Text>
							<Text
								color='white'
							>
								Priority: Low
							</Text>
						</Block>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Pellentesque finibus fringilla nibh ac sollicitudin.
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Updated: 12/12/2019
							</Text>
							<Text
								color='blue'
							>
								More details >>
							</Text>
						</Block>
					</Block>
					<Block
						borderWidth={1}
						style={{
							backgroundColor: '#6c757c',
							borderColor: 'rgba(0, 0, 0, 0.125)',
							borderRadius: 20,
							marginBottom: 15
						}}
					>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20,
								backgroundColor: '#677178',
								borderBottomWidth: 1,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								borderBottomColor: 'rgba(0, 0, 0, 0.125)'
							}}
						>
							<Text
								h5
								style={{
									paddingBottom: 5,
									color: 'white'
								}}
							>
								Bug #123456
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Status: New
							</Text>
							<Text
								color='white'
							>
								Priority: Low
							</Text>
						</Block>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Pellentesque finibus fringilla nibh ac sollicitudin.
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Updated: 12/12/2019
							</Text>
							<Text
								color='blue'
							>
								More details >>
							</Text>
						</Block>
					</Block>
					<Block
						borderWidth={1}
						style={{
							backgroundColor: '#6c757c',
							borderColor: 'rgba(0, 0, 0, 0.125)',
							borderRadius: 20,
							marginBottom: 15
						}}
					>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20,
								backgroundColor: '#677178',
								borderBottomWidth: 1,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								borderBottomColor: 'rgba(0, 0, 0, 0.125)'
							}}
						>
							<Text
								h5
								style={{
									paddingBottom: 5,
									color: 'white'
								}}
							>
								Bug #123456
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Status: New
							</Text>
							<Text
								color='white'
							>
								Priority: Low
							</Text>
						</Block>
						<Block
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Pellentesque finibus fringilla nibh ac sollicitudin.
							</Text>
						</Block>
						<Block
							row
							space='between'
							style={{
								paddingTop: 12,
								paddingBottom: 12,
								paddingLeft: 20,
								paddingRight: 20
							}}
						>
							<Text
								color='white'
							>
								Updated: 12/12/2019
							</Text>
							<Text
								color='blue'
							>
								More details >>
							</Text>
						</Block>
					</Block>
				</Block>
			</ScrollView>
    )
  }
}