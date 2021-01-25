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
  findSearch: (value) => {
    var arrTotal = [];
    var cookieId = value.cookieId;
    var createdAt = {
      '$gte': ""+value.date+"T00:00:00.000Z",
      '$lt': ""+value.date+"T23:59:59.590Z"
    }
    // if (value.cookieId != "" && value.date != "" && value.data != "") {
    //   arrTotal.push({cookieId,createdAt})
    if (value.cookieId != "" && value.date != "") {
      arrTotal.push({cookieId,createdAt})
    } else if (value.cookieId != "") {
      arrTotal.push({cookieId})
    } else if (value.date != "") {
      arrTotal.push({createdAt})
    }
    console.log(arrTotal[0])
    // var test = {
    //   'cookieId': value.cookieId,
    //     'createdAt': {
    //       '$gte': ""+value.date+"T00:00:00.000Z",
    //       '$lt': ""+value.date+"T23:59:59.590Z"
    //     }
    // }
    return new Promise((resolve, reject) => {
      ModelData.find(
        arrTotal[0]
      , (err, doc) => {
        if (err) return reject(err)
        if (doc) {
          console.log(doc)
        }
        resolve(doc)
      })
    })
  },
}
