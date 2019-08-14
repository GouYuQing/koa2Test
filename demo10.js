const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        //set在上下文中写入cookies
        //get读取上下文中的cookies
        ctx.cookies.set(
            'Myname','gouyuqing',{
                domin:'127.0.0.1',
                // path:'/index',
                maxAge:1000*60*60*24,
                expires:new Date('2019-08-15'),
                httpOnly:false,
                overwrite:false
            }
            );
        ctx.body = 'cookies is ok';
    }else{
        if(ctx.cookies.get('Myname')){
            ctx.body = ctx.cookies.get('Myname');
        }
        // ctx.body = 'hello';
    }
});
app.listen(3000,()=>{
    console.log("server is starting at port 3000");
})