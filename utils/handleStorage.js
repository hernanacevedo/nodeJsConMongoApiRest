const multer = require("multer")

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        const parthStorage =`${__dirname}/../storage`
        cb(null,parthStorage)
    },
    filename:function(req,file,cb){
        const ext = file.originalname.split(".").pop()
        const filename=`file-${Date.now()}.${ext}`;
        cb(null,filename)
    }
})

const uploadMiffleware= multer({storage});

module.exports= uploadMiffleware