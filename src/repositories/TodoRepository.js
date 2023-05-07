const Key = "Todos";

const save = (data) => {
  localStorage.setItem(Key, JSON.stringify(data));
};

const get = () => {
  const jsonString = localStorage.getItem(Key);
  return JSON.parse(jsonString);
};

export { save, get };
