const Key = "Users";

const saveUser = (data) => {
  const jsonString = localStorage.getItem(Key);
  let listUsers = JSON.parse(jsonString);
  console.log(listUsers);
  if (!listUsers) {
    listUsers = [];
  }
  listUsers.push(data);
  localStorage.setItem(Key, JSON.stringify(listUsers));
};

const getUserByUsername = () => {
  const jsonString = localStorage.getItem(Key);
};

export { saveUser, getUserByUsername };
