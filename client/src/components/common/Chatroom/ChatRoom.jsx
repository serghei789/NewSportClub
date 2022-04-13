import io  from 'socket.io-client'
import {useState} from "react";
import Chat from "./Chat";

const socket = io.connect('http://localhost:4042')

function ChatRoom({event}) {
	const [showChat, setShowChat] = useState(false)

	const joinRoom = () => {
			socket.emit('join_room', event.id);
			setShowChat(true)
	}

	return (
		<div className="App">
			{!showChat ? (
					<div className="joinChatContainer">
						<button onClick={joinRoom}>Участвовать в мероприятии</button>
					</div>
				)
				: (
					<Chat socket={socket} event={event} />
				)}
		</div>
	);
}

export default ChatRoom;
