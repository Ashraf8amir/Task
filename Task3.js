
let body = document.getElementById("body");
async function get_data() {
   let response = await fetch('https://official-joke-api.appspot.com/jokes/random');
   let data = await  response.json(response);
   let body_joke = `${data.setup} - ${data.punchline}`;
   body.innerText = body_joke;
}
get_data();


