import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import CreateNewTaskForm from './CreateNewTaskForm';
import { getProjectsFromList } from '../Main/utils';
import { getProjectMembers, createNewTask } from './actions';
import '@expo/vector-icons';

class CreateNewTask extends React.Component {
  static navigationOptions = {
    title: 'Create new task',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSubmit = (values) => {
    const { createNewTask: _createNewTask } = this.props;
    _createNewTask(values);
  }

  render() {
    const { all_tasks, getProjectMembers, projectMembers } = this.props;
    const projects = (all_tasks && getProjectsFromList(all_tasks)) || [];
    return (
      <ScrollView>
          <CreateNewTaskForm
            projects={projects}
            getMembers={getProjectMembers}
            projectMembers={projectMembers}
            onSubmit={this.onSubmit}
          />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    all_tasks: _.get(state, ['main', 'all_tasks_list', 'issues']),
    selectedProject: _.get(state, ['form', 'createTaskFrom', 'values', 'project']),
    projectMembers: _.get(state, ['createNewTask', 'project_members', 'memberships'])
  };
}

export default connect(
  mapStateToProps,
  {
    getProjectMembers,
    createNewTask
  }
)(CreateNewTask);