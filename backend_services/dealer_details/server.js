const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const dealerData = {
  Laptop: [
    { dealer: "Dealer A", price: 600 },
    { dealer: "Dealer B", price: 620 },
    { dealer: "Dealer C", price: 610 },
  ],
  Tablet: [
    { dealer: "Dealer A", price: 300 },
    { dealer: "Dealer B", price: 320 }
  ],
  Phone: [
    { dealer: "Dealer C", price: 450 },
    { dealer: "Dealer D", price: 460 }
  ]
};

app.get("/dealers/:product", function (req, res) {
  const productName = req.params.product;
  const dealers = dealerData[productName];
  if (dealers) {
    res.json(dealers);
  } else {
    res.status(404).send("No dealers found for that product.");
  }
});

app.listen(8080, () => {
  console.log("Dealer Pricing Service running on port 8080");
});
