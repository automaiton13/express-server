/**
 * @file express路由get请求
 * @author automation13 <1271547283@qq.com>
 */

let express = require('express');
let router = express.Router();

router.get('/example', function(req, res) {
    res.send('get请求路径成功：example');
});

export default router;