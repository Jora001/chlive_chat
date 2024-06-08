const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "a38c0a59-991c-4e83-b30b-313f5ec6e295" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        if (e.response) {
            // If the error has a response property, it might be an HTTP response error
            return res.status(e.response.status).json(e.response.data);
        } else {
            // If the error does not have a response property, handle it differently
            console.error('Unexpected Error:', e.message);
            return res.status(500).json({ message: 'An unexpected error occurred', error: e.message });
        }
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
