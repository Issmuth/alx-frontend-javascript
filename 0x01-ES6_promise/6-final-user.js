import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((value) => {
      const results = [];
      for (const result of value) {
        results.push({ status: result.status, value: result.value || result.reason });
      }
      return results;
    });
}
