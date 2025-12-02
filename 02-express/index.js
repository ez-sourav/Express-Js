import express from "express";
const port = 2000;
const app = express();

app.use(express.json());
let id = 4;

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
  // res.type("application/json");
  res.send(data);
});

app.get('/profiles/:id',(req,res)=>{
    const resId = Number(req.params.id)
    res.send(resId)
})

app.post("/profiles", (req, res) => {
  const { name, batch, dept } = req.body;
  const newProfile = { id: id++, name, batch, dept };
  data.push(newProfile);
  res.status(201).json(newProfile);
});

app.delete("/profiles/:id", (req, res) => {
  const reqId = Number(req.params.id);
  console.log(reqId);
  data = data.filter((profile) => profile.id !== reqId);
  res.json({
    message: "Profile deleted successfully",
  });
});

app.put("/profiles/:id", (req, res) => {
  const reqId = Number(req.params.id);
  const index = data.findIndex((p) => p.id === reqId);
  if (index === -1)
    return res.status(404).json({
      message: "Profile not found",
    });

  data[index] = {
    ...data[index], 
    ...req.body,
  };
  res.json(data[index]);
});
app.listen(port, () => {
  console.log("Server Started, port: ", port);
});
