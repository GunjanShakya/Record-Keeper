import mongoose from "mongoose"

mongoose.set('strictQuery', true);
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ydfjzhv-shard-00-00.3tsvyia.mongodb.net:27017,ac-ydfjzhv-shard-00-01.3tsvyia.mongodb.net:27017,ac-ydfjzhv-shard-00-02.3tsvyia.mongodb.net:27017/?ssl=true&replicaSet=atlas-eipixi-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('Database Connected');
    }
    catch (error) {
        console.log('Error while connecting with the database', error)
    }
}

export default Connection;