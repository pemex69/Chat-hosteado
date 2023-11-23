const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();
const host = process.env.HOST;
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { 'private-key': process.env.CHAT_ENGINE_KEY } }
        );
        return res.status(r.status).json(r.data);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Something went wrong" });
    }
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});