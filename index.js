const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const USER_ID = "ananya_10072004";
const EMAIL = "ananya.2022@vitstudent.ac.in";
const ROLL_NUMBER = "22BEI0073";

app.post("/bfhl", (req, res) => {
  const data = req.body.data;

  let odd_numbers = [];
  let even_numbers = [];
  let alphabets = [];
  let special_characters = [];
  let sum = 0;
  let allChars = "";

  data.forEach((str) => {
    if (/^-?\d+$/.test(str)) {
      let num = parseInt(str);
      if (num % 2 === 0) even_numbers.push(str);
      else odd_numbers.push(str);
      sum += num;
    } else if (/^[a-zA-Z]+$/.test(str)) {
      alphabets.push(str.toUpperCase());
      allChars += str;
    } else {
      special_characters.push(str);
    }
  });

  let reversed = allChars.split("").reverse().join("");
  let concat_string = "";
  for (let i = 0; i < reversed.length; i++) {
    concat_string += i % 2 === 0 ? reversed[i].toUpperCase() : reversed[i].toLowerCase();
  }

  res.json({
    is_success: true,
    user_id: USER_ID,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
