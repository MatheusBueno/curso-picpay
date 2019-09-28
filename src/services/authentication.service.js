import { auth } from 'firebase';

class AuthenticationService {
  userKey;

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged(
        user => {
          if (user) {
            this.userKey = user.uid;
            resolve(user);
          } else {
            resolve(undefined);
          }
        },
        error => reject(error)
      );
    });
  }

  registerUser(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
  }
}

export default new AuthenticationService();
