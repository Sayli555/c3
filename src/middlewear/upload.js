const multer=require("multer");

const path=require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
      const prefixed = Date.now() 
      cb(null,prefixed + '-' +  file.originalname)
    }
  })


  function fileFilter (req, file, cb) {
      console.log({file})

      if(file.mimetype==="image/jpeg" ||file.mimetype==="image/png"){
        cb(null, true)
      }
      else{
        cb(null, false)
      }

    } 
  

const options={
    storage,
    fileFilter,
    limits:{
        fileSize:1024*1024*5
    }
}

const uploads=multer(options);

module.exports=uploads