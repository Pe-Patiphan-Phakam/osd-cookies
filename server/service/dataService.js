const ModelData = require("../model/dataModel")

module.exports = {
  findAll: () => {
    return new Promise((resolve, reject) => {
      ModelData.find({}, (err, doc) => {
        if (err) return reject(err)
        if (doc) {
          console.log(doc)
        }
        resolve(doc)
      })
    })
  },
  findByid: (cid) => {
    return new Promise((resolve, reject) => {
      ModelData.find({ cookieId: cid }, (err, doc) => {
        if (err) return reject(err)
        if (doc) {
          console.log(doc)
        }
        resolve(doc)
      })
    })
  },
  findTypeByid: (tid) => {
    return new Promise((resolve, reject) => {
      ModelData.find({ typeId: tid }, (err, doc) => {
        if (err) return reject(err)
        if (doc) {
          console.log(doc)
        }
        resolve(doc)
      })
    })
  },
  addData: (dataPayload) => {
    return new Promise((resolve, reject) => {
      ModelData.insertMany([dataPayload], (err, doc) => {
        if (err) return reject(err)
        if (doc) {
          console.log(doc)
        }
        resolve(doc)
      })
    })
  },
  updateOne: (updateId, access) => {
    console.log(updateId._id)
    console.log(access)
    return new Promise((resolve, reject) => {
      ModelData.updateOne({ _id: updateId._id }, { access: access.access }, function(err,doc) {
        if (err) return reject(err)
        if (doc) {
          console.log(doc)
        }
        resolve(doc)
      })
    })
  },
  findSearch: (cookieId, date) => {
    // var Total = "";
    // if(cookieId != ""){
    //   Total += "cookieId: '"+cookieId+"'";
    // }
    // if(IP != ""){
    //   Total += "data[0].ipAdress: '"+IP+"',";
    // }
    return new Promise((resolve, reject) => {
      ModelData.find({
        cookieId: cookieId,
        createdAt: {
          '$gte': (""+date+"T00:00:00.000Z"),
          '$lt': (""+date+"T23:59:59.590Z")
        }
      }, (err, doc) => {
        if (err) return reject(err)
        if (doc) {
          console.log(doc)
        }
        resolve(doc)
      })
    })
  },
}
