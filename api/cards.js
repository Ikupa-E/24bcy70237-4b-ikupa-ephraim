const express = require("express");
const router = express.Router();

// In-memory card storage (MongoDB optional)
let cards = [];

// GET – Get all cards
router.get("/", (req, res) => {
  res.json(cards);
});

// POST – Add a new card
router.post("/", (req, res) => {
  const { suit, value, collection } = req.body;

  if (!suit || !value || !collection) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newCard = {
    id: Date.now().toString(),
    suit,
    value,
    collection,
  };

  cards.push(newCard);
  res.status(201).json(newCard);
});

// PUT – Update a card by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { suit, value, collection } = req.body;

  const card = cards.find(c => c.id === id);
  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  card.suit = suit || card.suit;
  card.value = value || card.value;
  card.collection = collection || card.collection;

  res.json(card);
});

// DELETE – Delete card by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  cards = cards.filter(c => c.id !== id);
  res.json({ message: "Card deleted successfully" });
});

module.exports = router;
