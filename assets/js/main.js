const trigger = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", 
  "are you human", 
  "are you bot", 
  "are you human or bot"
    ],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["thanks", "thank you"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"]

];

const reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am infinite"],
    ["I am just a bot", "I am a bot. What are you?"],
    ["The one true God, JavaScript"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV"],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Bye", "Goodbye", "See you later"],
    ["Sushi", "Pizza"],
    ["Bro!"],
    ["Yes?"]
  ];


  const coronavirus = ["Please Stay At Home"];


  function output(input) {
      let product;

      let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

      text = text
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "");

      if (compare(trigger, reply, text)) {
          product = compare(trigger, reply, text);
      } else if (text.match(/coronavirus/gi)) {
          product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
      } else {
          product = alternative[Math.floor(Math.random() * alternative.length)];
      }

      addChat(input, product)
  }


  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if(triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

  function addChat(input, product) {
      const mainDiv = document.getElementById('responses')
      let userPara = document.createElement("p");
      userPara.id = "user"
      userPara.innerHTML = `<span class="user-response">You: ${input}</span>`;
      mainDiv.appendChild(userPara);


      // const botMain = document.getElementById("bot");
      let botPara = document.createElement("p");
      botPara.id = "bot";
      botPara.innerHTML = `<span class="bot-response">Chatbot: ${product}</span>`;
      mainDiv.appendChild(botPara);
      speak(product);
      
  }

  const synth = window.speechSynthesis;
  let voices = synth.getVoices();

  function speak(string) {
    let u = new SpeechSynthesisUtterance
    u.text = string;
    u.lang = "en-US";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
    // debugger
  }

  
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("message")
    inputField.addEventListener("keydown", e => {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
        }
    })



    const sendBtn = document.getElementById("send");

    sendBtn.addEventListener('click', () => {
      let input = inputField.value;
      inputField.value = "";
      output(input);
  })

  })






// MODAL 

const modal = document.querySelector('.modal');
const triggerButton = document.querySelector('.trigger');
const closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle("show-modal");
}


function windowOnClick(event) {
  if(event.target == modal) {
    toggleModal();
  }
}


triggerButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);