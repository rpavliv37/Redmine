import React from 'react';
import { View, TextInput, StyleSheet, ScrollView, Picker, Text, Modal, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
`;

export default class Main extends React.Component {
	static navigationOptions = {
    title: 'Main',
  };
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['#', 'Tracker', 'Status', 'Priority', 'Subject', 'Assignee', 'Updated'],
      tableData: [
        ['12345', '2', '3', '4', '12345', '2', '3'],
        ['12345', 'b', 'c', 'd', '12345', '2', '3'],
        ['12345', '2', '3', '456\n789', '12345', '2', '3'],
        ['12345', 'b', 'c', 'd', '12345', '2', '3']
			],
			modalVisible: false	
    }
	}
	
	setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
	render() {
		const state = this.state;
		const {navigate} = this.props.navigation;
    return (
			<React.Fragment>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Picker
						selectedValue={this.state.language}
						style={{height: 50, width: 140}}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({language: itemValue})}
					>
						<Picker.Item label="Status" value="java" />
						<Picker.Item label="JavaScript" value="js" />
					</Picker>
					<Picker
						selectedValue={this.state.language}
						style={{height: 50, width: 140}}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({language: itemValue})
						}>
						<Picker.Item label="Projects" value="java" />
						<Picker.Item label="JavaScript" value="js" />
					</Picker>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'flex-end',
						paddingRight: 10
					}}
				>
								<View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Button
							icon={
								<Icon
									name="plus"
									size={15}
									color="white"
								/>
							}
							title="  New Issue"
							onPress={() => {
								this.setModalVisible(true);
							}}
					/>
        </TouchableHighlight>
      	</View>
				</View>
				<ScrollView horizontal={true}>
					<View style={styles.container}>
						<Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
							<Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
							<Rows data={state.tableData} textStyle={styles.text}/>
						</Table>
					</View>
				</ScrollView>
			</React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, width: 70 }
});