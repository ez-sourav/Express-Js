import express from "express";
const port = 2000;
const app = express();

app.use(express.json());
let id = 2;

let data = [
  {
    id: 1,
    name: "Sourav BIswas",
    batch: "2023-2027",
    dept: "BCA",
  },

  {
    id: 2,
    name: "Sourav BIswas",
    batch: "2023-2027",
    dept: "BCA",
  },
  {
    id: 3,
    name: "Sourav BIswas",
    batch: "2023-2027",
    dept: "BCA",
  },
];

app.get("/profiles", (request, res) => {
  res.type("application/json");
  res.send(data);
});

app.post("/profiles", (req, res) => {
  const reqData = req.body;
  const newBody = {
    id: id,
    name: reqData.name,
    batch: reqData.batch,
    dept: reqData.dept,
  };

  data.push(newBody);

  id += 1;
  res.send();
});

app.delete("/profiles/:id", (req, res) => {
  const reqId = req.params.id;
  console.log(reqId);

  data = data.filter((ele) => ele.id != reqId);
  res.send();
});

app.put("/profiles/:id", (req, res) => {
  const reqId = parseInt(req.params.id);
  const profile = data.filter((ele) => ele.id === reqId)[0];

  console.log(profile);
  
  const reqBody = req.body;
  const newProfile = {
    id: profile.id,
    name: reqBody.name ? reqBody.name : profile.name,
    batch: reqBody.batch ? reqBody.batch : profile.batch,
    dept: reqBody.dept ? reqBody.dept : profile.dept,
  };
  data = data.filter((ele) => ele.id != reqId);
  data.push(newProfile);
  res.send(newProfile);
});
app.listen(port, () => {
  console.log("Server Started, port: ", port);
});
