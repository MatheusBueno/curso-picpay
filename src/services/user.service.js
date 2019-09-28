import { database } from 'firebase';

import AuthService from './authentication.service';

class UserService {
  createUserInUsersList(userKey, user) {
    return database()
      .ref(`users/usersList/${userKey}`)
      .set({ ...user });
  }

  getUserBalance() {
    const userKey = AuthService.userKey;

    return database().ref(`users/usersList/${userKey}/private/userCurrentBalanceInCents`)
  }

  getUserList(){
    return new Promise( (resolve, reject) => {
      database().ref('users/usersList/').once('value', (snapshot) => {
        resolve(snapshot.val());
      }, error => reject(error) )
    })
  }

}

export default new UserService();
