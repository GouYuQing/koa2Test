const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let page = new Router();
let home = new Router();
home.get('/hello',async(ctx)=>{
    ctx.body='hello world home'
}).get('/todo',async(ctx)=>{
    ctx.body = 'home todo page'
})
page.get('/hello',async(ctx)=>{
    ctx.body='hello world page'
}).get('/todo',async(ctx)=>{
    ctx.body = 'page todo page'
})
//父级路由
let router = new Router();
//装载所有子路由
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());


//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});