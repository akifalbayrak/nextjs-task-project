import { MongoClient } from "mongodb";
export default async function handler(req, res) {
    if (req.method === "POST") {
        const userEmail = req.body.email;

        if (!userEmail && !userEmail.includes("@")) {
            res.status(422).json({ message: "Invalid email addres." });
            return;
        }

        const client = await MongoClient.connect(
            `mongodb+srv://akifzoort:fkzlp5C1QKNXZiNg@cluster0.odr4bza.mongodb.net/newsletter?retryWrites=true&w=majority&appName=Cluster0`
        );
        const db = client.db();

        await db.collection("emails").insertOne({ email: userEmail });

        client.close();

        res.status(201).json({ message: "Signed Up" });
    }
}
