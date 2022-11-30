const api = `https://joke.deno.dev/`;
const imageApi = `https://picsum.photos/200/300`;
const fetchJoke = async () => {
  await (
    await fetch(api)
  )
    .json()
    .then((data) => {
      document.getElementById("setup").innerText = `${data.setup}`;
      document.getElementById("punchline").innerText = `${data.punchline}`;
      document.getElementById(
        "container"
      ).style.backgroundImage = `url("${imageApi})`;
    })
    .catch(() =>
      alert("Sorry! Failed to fetch joke.\nPlease reload the page.")
    );
};

window.onload = () => fetchJoke();
