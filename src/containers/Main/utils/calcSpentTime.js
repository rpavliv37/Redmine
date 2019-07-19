import _ from 'lodash';

const calcSpentTime = (data) => {
  let sumOfHours = 0;
  for(let i = 0; i < data.length; i++) {
    sumOfHours+=data[i].hours;
  }
  return sumOfHours;
}

export default calcSpentTime;