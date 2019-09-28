export function transformBalanceInCentsToReal(balance) {
  return balance /100;
}

export function transformBalanceInRealToCents(balance) {
  return balance * 100;
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

export function transformTrasnferListInArray(transfers) {
  const transfersKeys = Object.keys(transfers);
  const transferList = [];

  transfersKeys.forEach(key => {

    transferList.push(transfers[key]);
  });

  return transferList;
}