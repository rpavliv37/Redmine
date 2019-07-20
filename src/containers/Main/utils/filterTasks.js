import _ from 'lodash';

const filterTasks = (tasks, projectName, statusName) => {
  const filteredTasks = [...tasks];
  if(projectName && statusName) {
    return _.filter(filteredTasks, function(o) { return (o.project.name === projectName && o.status.name === statusName); })
  } else if(projectName) {
    return _.filter(filteredTasks, function(o) { return o.project.name === projectName; })
  } else if(statusName) {
    return _.filter(filteredTasks, function(o) { return o.status.name === statusName; })
  }
  return filteredTasks;
};

export default filterTasks;