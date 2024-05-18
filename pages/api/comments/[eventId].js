import { MongoClient } from "mongodb";
export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, text } = req.body;

        const client = await MongoClient.connect(
            `mongodb+srv://akifzoort:fkzlp5C1QKNXZiNg@cluster0.odr4bza.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0`
        );
        if (
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !text ||
            text.trim() === ""
        ) {
            res.status(422).json({ message: "Invalid input" });
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId,
        };

        const db = client.db();

        const result = await db.collection("comments").insertOne(newComment);

        newComment.id = result.insertedId;

        res.status(201).json({ message: "Added comment", comment: newComment });
    }
    if (req.method === "GET") {
        const dummyList = [
            {
                id: "c1",
                name: "akif",
                text: "hello text",
            },
            {
                id: "c2",
                name: "mehmet",
                text: "hello test",
            },
        ];
    }
    client.close();
}
