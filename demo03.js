const Koa =require('koa');
const app = new Koa();
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
        let postdata=await parsePoatDate(ctx);
        ctx.body = postdata;
    }else{
        ctx.body = '<h2>404</h2>'
    }
})
function parsePoatDate(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            ctx.req.addListener('data',(data)=>{
                postdata += data;
            })
            ctx.req.on('end',function(){
                let parseData = parseQueryStr( postdata );
                resolve(parseData)
            })
        }catch(error){
            reject(error);
        }
    })
}
function parseQueryStr(queryStr){
    let queryDate={};
    let queryStrList=queryStr.split('&');
    console.log(queryStrList);
    for(let [index,queryStr] of queryStrList.entries()){
        let itemList = queryStr.split('=');
        console.log(itemList);
        queryDate[itemList[0]=decodeURIComponent(itemList[1])];
    }
    return queryDate;
}
app.listen(3000,()=>{
    console.log('server is starting at port 3000');
})