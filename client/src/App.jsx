import { useState } from "react";
import axios from "axios";

function App() {

    const [message, setMessage] = useState("");

    const [reply, setReply] = useState("");

    const sendMessage = async () => {

        const res = await axios.post("http://localhost:5000/chat", {

            message,

        });

        setReply(res.data.reply);

    };

    return (

        <div>

            <textarea

                value={message}

                onChange={(e) => setMessage(e.target.value)}

            />

            <button onClick={sendMessage}>

                Ask AI

            </button>

            <p>{reply}</p>

        </div>

    );

}

export default App;