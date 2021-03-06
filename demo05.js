const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

function render(page){
    return new Promise((resolve,reject)=>{
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl,"binary",(err,data)=>{
            // console.log(444);
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}
async function router(url) {
    let page = '404.html';
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
                page = '404.html';
                break;
        default:
            break;
    }
    console.log(html);
    let html = render(page);
    return html;
}

app.use(async (ctx) => {
    let url = ctx.request.url;
    let html = await router(url);
    ctx.body = html;
})
app.listen(3000, () => {
    console.log('server is running')
})