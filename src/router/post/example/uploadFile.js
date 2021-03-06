/**
 * @file express路由post请求，request中{"Content-Type","application/x-www-form-urlencoded;charset=UTF-8"}
 * @author automation13 <1271547283@qq.com>
 */

// 开源库
import express from 'express';
import fs from 'fs';
import multer from 'multer';

const router = express.Router();

(function() {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            fs.mkdir('my-uploads', { recursive: true }, () => { // 如果没有文件夹则先创建文件夹
                cb(null, 'my-uploads');
            });
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        },
    });
    const upload = multer({ storage: storage });

    router.post('/exampleFormUploadFile', upload.single('fileContent'), function(req, res) {
        res.send('exampleFormUploadFile success');
    });
})();

router.post('/exampleBlobUploadFile', function(req, res) {
    const { name, content } = req.body;
    fs.writeFile(name, content, { encoding: 'base64' }, function(err) {
        if (err) {
            console.log('写文件操作失败');
            res.send('exampleBlobUploadFile fail');
        } else {
            console.log('写文件操作成功');
            res.send('exampleBlobUploadFile success');
        }
    });
});

export default router;