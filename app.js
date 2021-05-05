const socket = io('http://localhost:8000/');

const form = document.querySelector("#input-form");
const messageInput = document.querySelector("#message-input");
const messageContainer = document.querySelector(".message-section");

const appendMessage = (name,message,time,position) =>{
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(position);
    const nameBody = document.createElement("h6");
    nameBody.innerText = name;
    nameBody.classList.add("user-name");
    const messageBody = document.createElement("p");
    messageBody.innerText = message;
    messageBody.classList.add("user-message");
    const timeBody = document.createElement("span");
    timeBody.innerText = time;
    timeBody.classList.add("time");
    messageElement.append(nameBody);
    messageElement.append(messageBody);
    messageElement.append(timeBody);
    messageContainer.append(messageElement);
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    var current = new Date();
    var currentTime = current.toLocaleTimeString();
    appendMessage("You",message,currentTime,'right');
    socket.emit("send",message)
    messageInput.value = "";
})

const nameInput = prompt("Enter your name to join the live chat: ");
const gender = prompt("What is your gender(M for Male and F for Female): ");

socket.emit("new-user-joined",nameInput);

socket.on("user-joined", (name)=>{
    var current = new Date();
    var currentTime = current.toLocaleTimeString();
    appendMessage(name,"Joined the live chat",currentTime,"left")
})

socket.on("receive",data=>{
    var current = new Date();
    var currentTime = current.toLocaleTimeString();
    appendMessage(data.name,data.message,currentTime,"left")
})

socket.on("left",name=>{
    var current = new Date();
    var currentTime = current.toLocaleTimeString();
    appendMessage(name,"Left the live chat :(",currentTime,"left")
})