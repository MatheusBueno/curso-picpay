class User {
  constructor(userEmail, userName, userNickname, userPhotoUrl) {
    this.public = new PublicClass(userEmail, userName, userNickname, userPhotoUrl);
    this.private = { userCurrentBalanceInCents: 0 };
    this.userCreatedAt = { '.sv': 'timestamp' };
  }
}

class PublicClass {
  constructor(userEmail, userName, userNickname, userPhotoUrl) {
    this.userEmail = userEmail;
    this.userName = userName;
    this.userNickname = userNickname;
    this.userPhotoUrl =
      'https://firebasestorage.googleapis.com/v0/b/curso-picpay.appspot.com/o/userPhotos%2Favatar-icon-png-8.jpg?alt=media&token=aeb05b4a-cca3-4537-9dde-bc0031c61f79';
  }
}

export default User;
