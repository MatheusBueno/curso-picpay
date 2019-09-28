import { auth } from 'firebase';

class AuthenticationService {
  getCurrentUser() {
    return new Promise((resolve, reject) => {
      auth().onAuthStateChanged(
        user => {
          if (user) {
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
