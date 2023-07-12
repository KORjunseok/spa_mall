const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods.js");
const cartsRouter = require("./routes/carts.js");
const connect = require("./schemas/index.js");
connect();

app.use(express.json());
app.use("/api", [goodsRouter, cartsRouter]);

// app.use(express.json())로 사용되는 req.body
app.post("/", (req, res) => {
  console.log(req.body);

  res.send("기본 URI에 POST 메소드가 정상적으로 실행되었습니다.");
});

app.get("/", (req, res) => {
  // params의 key와 value 값
  console.log(req.query);

  const obj = {
    keykey: "value 입니다.",
    "이름입니다.": "이름일까요?",
  };
  // obj 객체 변수를 Body 값으로 반환 받음
  res.status(400).json(obj);
  // res.send("정상적으로 반환되었습니다.");
});

app.get("/:id", (req, res) => {
  console.log(req.params);

  res.send(" :id URI에 정상적으로 반환되었습니다.");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
