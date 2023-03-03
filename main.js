const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');
 

getJokes();

 jokeBtn.addEventListener('click', getJokes);

async function getJokes() {

    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);
    const data = await res.json();
    console.log(data);
    joke.innerText = data.joke;


}
 
  


