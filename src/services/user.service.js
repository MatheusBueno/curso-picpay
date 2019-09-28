import { database } from 'firebase';

class UserService {
  createUserInUsersList(userKey, user) {
    return database()
      .ref(`users/usersList/${userKey}`)
      .set({ ...user });
  }
}

export default new UserService();
