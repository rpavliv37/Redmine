import _ from 'lodash';

const getProjectsFromList = (data) => {
  const uniqProjects = [];
  for(let i = 0; i < data.length; i++) {
    uniqProjects.push(data[i].project);
  }
  console.log('uniqProjects', _.uniqBy(uniqProjects, 'id'))
  return _.uniqBy(uniqProjects, 'id');
}

export default getProjectsFromList;