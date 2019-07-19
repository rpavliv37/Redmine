import _ from 'lodash';

const getStatusesFromList = (data) => {
  const uniqStatuses = [];
  for(let i = 0; i < data.length; i++) {
    uniqStatuses.push(data[i].status.name);
  }
  return _.uniq(uniqStatuses);
}

export default getStatusesFromList;