export const saveUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};