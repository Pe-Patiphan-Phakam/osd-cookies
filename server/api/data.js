const router = require("express").Router()
const ModelData = require("../model/dataModel")
const dataService = require("../service/dataService")

router.post("/",(req, res) => {
  const payload = req.body
  const newData = new ModelData(payload)
  dataService
    .addData(newData)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

router.get("/", (req, res) => {
  console.log(req.params)
  dataService
    .findAll()
    .then((data) =>{ 
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

router.post("/search", (req, res) => {
  console.log(req.body)
  const cookieId = req.body.cookieid
  const date = req.body.date
  const IP = req.body.ip
  dataService
    .findSearch(cookieId, date,IP)
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

router.get("/:id", (req, res) => {
  console.log(req.params)
  const id = req.params.id
  dataService
    .findByid(id)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

router.get("/type/:id", (req, res) => {
  const id = req.params.id
  dataService
    .findTypeByid(id)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

router.put("/:id", (req, res) => {
  const _id = req.params.id
  const newData = req.body.chat
  dataService.addChatByid(_id, newData, (err, doc) => {
    if (err) return res.status(500).send(err)
    if (doc) {
      console.log(" this doc form put data : ", doc)
    }
    return res.status(201)
  })
})

module.exports = router
