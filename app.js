const socket = io('http://localhost:8000/');

const form = document.querySelector("#input-form");
const messageInput = document.querySelector("#message-input");
const messageContainer = document.querySelector(".message-section");
const onlineUsers = document.querySelector(".online-users");

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

const userJoined = (name,gender)=>{
    const userContainer = document.createElement("div");
    userContainer.classList.add("user");
    const userDetails = document.createElement("div");
    userDetails.classList.add("user-details");
    const userName = document.createElement("h3");
    userName.innerText = name;
    userName.setAttribute("id","name");
    const userStatus = document.createElement("h6");
    userStatus.innerText = "online";
    userStatus.setAttribute("id","status");
    const userImg = document.createElement("div");
    userImg.classList.add("user-img");
    if(gender=="M" || gender=="m"){
        userImg.classList.add("male");
    }else{
        userImg.classList.add("female");
    }
    userDetails.append(userName);
    userDetails.append(userStatus);
    userContainer.append(userDetails);
    userContainer.append(userImg);
    onlineUsers.append(userContainer);
    console.log("New user joined")
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

userJoined(nameInput,gender);

socket.emit("new-user-joined",{nameInput,gender});

socket.on("user-joined", (data)=>{
    var current = new Date();
    var currentTime = current.toLocaleTimeString();
    userJoined(data.nameInput,data.gender);
    appendMessage(data.nameInput,"Joined the live chat",currentTime,"left");
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