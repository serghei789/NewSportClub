import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import {useSelector} from "react-redux";

function Chat({ socket, username, room, event }) {
	const [currentMessage, setCurrentMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const currentUser = useSelector(state => state.user)

	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData = {
				room: event.id,
				author: currentUser.name,
				message: currentMessage,
				time:
					new Date(Date.now()).getHours() +
					":" +
					new Date(Date.now()).getMinutes(),
			};

			await socket.emit("send_message", messageData);
			setMessageList((list) => [...list, messageData]);
			setCurrentMessage("");
		}
	};

	useEffect(() => {
		socket.on("receive_message", (data) => {
			setMessageList((list) => [...list, data]);
		});
	}, [socket]);

	return (
		<div className="chat-window">
			<div className="chat-header">
				<p>Live Chat</p>
			</div>
			<div className="chat-body">
				<ScrollToBottom className="message-container">
					{messageList.map((messageContent) => {
						return (
							<div
								className="message"
								id={currentUser.name === messageContent.author ? `other` : `you`}
							>
								<div>
									<div className="message-content">
										<p>{messageContent.message}</p>
									</div>
									<div className="message-meta">
										<p id="time">{messageContent.time}</p>
										<p id="author">{messageContent.author}</p>
									</div>
								</div>
							</div>
						);
					})}
				</ScrollToBottom>
			</div>
			<div className="chat-footer">
				<input
					type="text"
					value={currentMessage}
					placeholder="Start typing"
					onChange={(event) => {
						setCurrentMessage(event.target.value);
					}}
					onKeyPress={(event) => {
						event.key === "Enter" && sendMessage();
					}}
				/>
				<button onClick={sendMessage}>&#9658;</button>
			</div>
		</div>
	);
}

export default Chat;
