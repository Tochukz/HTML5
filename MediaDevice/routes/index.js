var express = require('express');
const { join } = require('path');
var router = express.Router();
const fse = require('fs-extra');
const { v4 } = require('uuid');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/normal-fileupload', async (req, res, next) => {
  try {
    const files = req.files;
    const path = `../upload`;
    fse.ensureDirSync(join(__dirname, path));  
    const filename =  files.picture.name;
    await files.picture.mv(join(__dirname, `${path}/${filename}`));
    return res.json({filename});
  } catch(err) {
    return next(err);
  }
});


router.post('/snapshot-upload', async (req, res, next) => {
  try {
    const binaryStr = req.body.fileBinary;
    const binary = binaryStr.replace(/^data:image\/\w+;base64,/, "");
    fse.ensureDirSync(join(__dirname, '../upload'));  
    const buffer = Buffer.from(binary, 'base64');
    const filename = `snapshot-${v4()}.png`;
    const fullPath = `../upload/${filename}`;
    const result  = await fse.writeFile(join(__dirname, fullPath), buffer);

    return res.json({ filename });
  } catch(err) {
    console.log('err', err);
    return next(err);
  }
});

router.get('/uploaded/:filename', async (req, res, next) => {
  try {
    const filename = req.params.filename;
    const filePath = join(__dirname, `../upload/${filename}`);
    if (!fse.existsSync(filePath)) {
      return res.status(404).json({'message': 'File not found'});
    }
    return res.sendFile(filePath);
  } catch(err) {
    return next(err);
  }
});
module.exports = router;
