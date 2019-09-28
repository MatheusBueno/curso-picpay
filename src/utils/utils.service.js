export function transformBalanceInCentsToReal(balance) {
  return balance /100;
}

export function transformUserListInArray(users) {
  const usersKeys = Object.keys(users);
  const userList = [];

  usersKeys.forEach(key => {
    const user = { key,  ...users[key].public };

    userList.push(user);
  });

  return userList;
}