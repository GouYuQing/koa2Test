const Koa =require('koa');
const app = new Koa();
//引入
const bodyParser = require('koa-bodyparser');
//进行使用
app.use(bodyParser());
app.use(async(ctx)=>{
    if(ctx.url==='/'&&ctx.method==='GET'){
        //显示表单数据
        let html=`
        <h2>hhhh</h2>
        <form method="POST" action="/">
        <p>username</p>
        <input name='userName'/><br/>
        <p>age</p>
        <input name='age'/><br/>
        <p>website</p>
        <input name='webSite'/><br/>
        <button type="submit">submit</button>
        </form>
        `;
        ctx.body =html;
    }else if(ctx.url==='/'&&ctx.method==='POST'){
        let postdata=ctx.request.body;
        ctx.body = postdata;
    }else{
        ctx.body = '<h2>404</h2>'
    }
})

app.listen(3000,()=>{
    console.log('server is starting at port 3000');
})