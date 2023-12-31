const socket=io('http://localhost:8000');

const form=document.getElementById('send-container');

const messageInput=document.getElementById('messageInp');

const messageContainer=document.querySelector(".container");

const append=(message,position)=>{
    const messageElement =document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}
form.addEventListener('submit',()=>{
    e.preventDefault();
    const message=message =messageInput.values;
    append('you: ${message}','right');
    socket.emit('send',message);
})
const name=promp("enter your name to join");
socket.emit('new-user-joined',name);

socket.on('user-joined', data=> {
append('${name} joined the chat','right')
})
socket.on('recieved', data=> {
    append('${data.message}; ${data.users}','left')
    })