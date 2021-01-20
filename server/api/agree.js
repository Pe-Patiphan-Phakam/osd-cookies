const router = require("express").Router()
const ModelAgree = require("../model/agreeModel")
const agreeService = require("../service/agreeService")

router.post("/",(req, res) => {
  const payload = req.body
  const newData = new ModelAgree(payload)
  agreeService
    .addData(newData)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

router.get("/", (req, res) => {
  agreeService
    .findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  agreeService
    .findByid(id)
    .then((data) => {
      console.log(data) 
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err)
    })
})

router.get("/type/:id", (req, res) => {
  const id = req.params.id
  agreeService
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
  agreeService.addChatByid(_id, newData, (err, doc) => {
    if (err) return res.status(500).send(err)
    if (doc) {
      console.log(" this doc form put data : ", doc)
    }
    return res.status(201)
  })
})

module.exports = router
