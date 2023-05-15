var express = require('express');
var router = express.Router();
const { index, findByKode, findByNama, createMatakuliah, deleteByKode, updateMatakuliah} = require('./controller')

router.get("/asrama", index);                   /* url: http://localhost:3000/matakuliah= */

module.exports = router;
