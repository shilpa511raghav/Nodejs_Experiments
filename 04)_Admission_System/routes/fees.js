var express = require('express');
var router = express.Router();

var userCtrl = require('../controllers/fees-controller');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/', [
    userCtrl.fetchAll
]);

router.get('/:id', [
    userCtrl.fetchById
]);

router.post('/', [
    userCtrl.insert
]);

router.post('/:id', [
    userCtrl.update
]);

router.delete('/:id', [
    userCtrl.hardDelete
]);

router.delete("/softdelete/:1d", [
    userCtrl.softDelete
]);

module.exports = router;
