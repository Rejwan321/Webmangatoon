const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Sample article data
const articles = {
  1: {
    title: "About the World",
    content: "The world of Absolute Sword Sense is set in a time of chaos where martial arts masters roam..."
  },
  2: {
    title: "Characters",
    content: "The story follows several key characters, each with their own journey and personal growth..."
  },
  3: {
    title: "Weapons",
    content: "Weapons play a crucial role in the story. Some of the most powerful swords include the Sky Sword..."
  }
};

// Route to get all articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// Route to get a single article by ID
app.get('/api/articles/:id', (req, res) => {
  const articleId = req.params.id;
  const article = articles[articleId];

  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
});

// Start the server if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;  // Export for testing
