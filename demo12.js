const Koa = require('koa');
const static = require('koa-static');
const path =require('path');

const app = new Koa();
//声明静态路径
const staticPath = './static';
app.use(static(path.join(__dirname,staticPath)));

app.use(async(ctx)=>{
    ctx.body = 'hello world';
});
app.listen(5000,function(){
    console.log('server is running');
})