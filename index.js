const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;

    data.forEach((str) => {
      if (/^-?\d+$/.test(str)) {
        const num = parseInt(str);
        sum += num;
        if (num % 2 === 0) {
          even_numbers.push(str);
        } else {
          odd_numbers.push(str);
        }
      } else if (/^[a-zA-Z]+$/.test(str)) {
        alphabets.push(str.toUpperCase());
      } else {
        special_characters.push(str);
      }
    });
    let allChars = alphabets.join("");
    let reversed = allChars.split("").reverse().join("");
    let concat_string = "";
    for (let i = 0; i < reversed.length; i++) {
      concat_string += i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
    }

    res.json({
      is_success: true,
      user_id: "ananya_10072004",
      email: "ananya,2022@vitstudent.ac.in",
      roll_number: "22BEI0073",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (error) {
    res.json({ is_success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
