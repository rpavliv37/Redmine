import _ from 'lodash';

const getStatusesFromList = (data) => {
  const uniqStatuses = [];
  for(let i = 0; i < data.length; i++) {
    uniqStatuses.push(data[i].status);
  }
  return _.uniqBy(uniqStatuses, 'id');
}

export default getStatusesFromList;