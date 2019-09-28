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

}

export default new UserService();
