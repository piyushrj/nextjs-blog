import { MongoClient } from "mongodb";

async function handler(req, res) {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || !name.trim() || !message || !message.trim()) {
        res.status(422).json({ message: "Invalid input." });
        return;
    }

    const newMessage = {
        email,
        name,
        message
    }

    // connect to database
    let client;
    try {
        client = await MongoClient.connect(process.env.DB_URL);
    } catch (error) {
        res.status(500).json({ message: "Could not connect to the database" });
        return;
    }

    // insert into database
    const db = client.db();
    try {
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.insertedId;
    } catch (error) {
        client.close();
        res.status(500).json({ message: "Storing message failed!" });
        return;
    }

    client.close();

    res.status(201).json({ message: "Successfully stored message.", message: newMessage });
}

export default handler;