const express = require('express')
const mongoose = require('mongoose')
const GameCharacter = require('./models/product.models.js');
const PORT = 3000
const app = express()

app.use(express.json());

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

app.get('/', (request, response)=> {
    response.send('Hello from NodeJS API Servers !');
});
//create a gamecharacter
app.post('/api/gamecharacters', async (request, response)=> {
    try {
        const gamecharacter = await GameCharacter.create(request.body);
        response.status(200).json(gamecharacter);
    } catch(error) {
        response.status(500).json({message: error.message});
    }
});
//find all gamecharacters
app.get('/api/gamecharacters', async (request,response)=> {
    try {
        const gamecharacter = await GameCharacter.find(request.body);
        response.status(200).json(gamecharacter);
    } catch(error) {
        response.status(500).json({message: error.message});
    }
});
//find a game character with his id
app.get('/api/gamecharacters/:id', async (request,response)=> {
    try {
        const { id } = request.params
        const gamecharacter = await GameCharacter.findById(id);
        response.status(200).json(gamecharacter);
    } catch(error) {
        response.status(500).json({message: error.message});
    }
});
//listing game characters
app.get("/api/gamecharacters", async (req, res) => {
    const { page = 1, limit = 10 } = request.query;
    try {
      const gamecharacter = await GameCharacter.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
  
      const totalCount = await GameCharacter.countDocuments();
      const totalPages = Math.ceil(totalCount / limit);
  
      res.json({
        gamecharacter,
        totalPages,
        currentPage: page,
      });
    } catch (err) {
      response.status(500).json({message: error.message});
    }
  });
mongoose.connect("mongodb+srv://roiYacine:Yacinestpasla3@hollowdev.mnleags.mongodb.net/?retryWrites=true&w=majority&appName=HollowDEV")
.then(() => {
    console.log("Connected to database !");
})
.catch(() => {
    console.log("Connection Failed !");
});
