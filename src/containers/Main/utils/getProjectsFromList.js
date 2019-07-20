import _ from 'lodash';

const getProjectsFromList = (data) => {
  const uniqProjects = [];
  for(let i = 0; i < data.length; i++) {
    uniqProjects.push(data[i].project);
  }
  return _.uniqBy(uniqProjects, 'id');
}

export default getProjectsFromList;