/**
 * @file express返回svg文件作为图片展示
 * @author automation13 <1271547283@qq.com>
 */

const express = require('express');
const router = express.Router();

router.get('/example-svg', function(req, res) {
    const svg = '<svg t="1570882380765" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3866" width="200" height="200"><path d="M0 352.832l93.12 98.752c231.296-245.44 606.464-245.44 837.76 0L1024 352.832C741.44 53.056 283.008 53.056 0 352.832z m372.352 395.008L512 896l139.648-148.16c-76.8-81.92-202.048-81.92-279.296 0zM186.24 550.4l93.12 98.752c128.448-136.32 336.96-136.32 465.408 0L837.824 550.4c-179.648-190.592-471.488-190.592-651.648 0z" fill="#0000ff" p-id="3867"></path></svg>'

    res.type('svg')
        .set('Cache-Control', 'no-cache ')
        .status(200)
        .send(svg);
});

export default router;