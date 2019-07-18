import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import shortid from 'shortid';
import {Picker, TouchableOpacity, ScrollView } from 'react-native';
import Expand from 'react-native-simple-expand';
import getStatusesFromList from './utils/getStatusesfromList';
import { Input, Button, Card, Block, Text, Icon, Navbar } from 'galio-framework';
import '@expo/vector-icons';

class Main extends React.Component {
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
		const { tasks, navigation } = this.props;
		const statuses = tasks && getStatusesFromList(tasks);
    return (
			<React.Fragment>
					<Block
						right
						style={{
							paddingTop: 12,
							paddingBottom: 12,
							paddingLeft: 20,
							paddingRight: 20,
							backgroundColor: '#677178',
							borderBottomWidth: 1,
							borderBottomColor: 'rgba(0, 0, 0, 0.125)'
						}}
					>
						<Text
							h4
							color='white'
						>
							Today spent time: 8h
						</Text>
					</Block>
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
						style={{
							paddingTop: 10
						}}
					>
					<TouchableOpacity
						onPress={() => {
							this.setState({ open: !this.state.open })
							getStatusesFromList(tasks);
						}}
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
								<Picker.Item label="All" value="all" />
								{/* {statuses && statuses.map((status) => {
									<Picker.Item label={status} value={status} />
								})} */}
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
							onPress={() => navigation.navigate('CreateNewTask')}
						>
							Add new Issue
						</Button>
					</Block>
					{tasks && tasks.map((task) => (
					<Block
						borderWidth={1}
						style={{
							backgroundColor: '#6c757c',
							borderColor: 'rgba(0, 0, 0, 0.125)',
							borderRadius: 20,
							marginBottom: 15
						}}
						key={shortid.generate()}
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
									{`${task.tracker.name} #${task.id}`} 
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
									Status: {task.status.name}
								</Text>
								<Text
									color='white'
								>
									Priority: {task.priority.name}
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
									{task.subject}
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
									Updated: {new Date(task.updated_on).toDateString()}
								</Text>
								<Text
									color='blue'
								>
									More details >>
								</Text>
							</Block>
					</Block>
					))}
			</Block>
			</ScrollView>
			</React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: _.get(state, ['main', 'tasks_list', 'issues'])
  };
}

export default connect(
  mapStateToProps,
  {
  }
)(Main);