const { MongoClient } = require('mongodb');

// MongoDB URI (replace with your actual URI)
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect(async (err) => {
  if (err) {
    console.error('MongoDB connection error:', err);
    return;
  }

  try {
    // Create a database
    const databaseName = 'testdb';
    const db = client.db(databaseName);

    console.log(`Connected to database: ${databaseName}`);

    // Create a collection
    const collectionName = 'students';
    const collection = db.collection(collectionName);

    console.log(`Collection created: ${collectionName}`);

    // Insert a document
    const documentToInsert = { name: 'megha', age: 25 };
    const result = await collection.insertOne(documentToInsert);

    console.log('Document inserted:', result.ops);

  } catch (error) {
    console.error('MongoDB operation error:', error);
  } finally {
    // Close the connection after operations
    client.close();
  }
});
