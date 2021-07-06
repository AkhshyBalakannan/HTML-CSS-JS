const button = document.querySelector("#jokes");
const jokesList = document.querySelector("#jokesList");
const addjokes = async function () {
  const resjoke = await getjokes();
  const lis = document.createElement("li");
  lis.append(resjoke);
  jokesList.append(lis);
};
const getjokes = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};
button.addEventListener("click", addjokes);
