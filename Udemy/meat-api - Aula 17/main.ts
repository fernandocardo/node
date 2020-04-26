import * as restify from 'restify';

const server = restify.createServer({
    name: 'mear-api',
    version: '1.0.0'
});

//inclusão de plugin para obter parâmetros da requisição
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/hello',(req,resp,next)=>{
    resp.setHeader('Content-Type','application/json');
    resp.status(200);
    resp.json({
        message: 'hello'
    });
    return next();
});


server.get('/info',(req,resp,next)=>{
    resp.setHeader('Content-Type','application/json');
    resp.status(200);
    resp.json({
        browser: req.userAgent(),
        method: req.method,
        url: req.href(),
        query: req.query
    });
    return next();    
});

//Exemplos de API POST, que valida o conteúdo do BODY
server.post('/cliente',[
    (req,resp,next)=>{
    if(req.body.nome === undefined || req.body.nome === ''){
        
        let error :any = new Error()
        error.statusCode = 400
        error.message = 'Nome do Cliente inválido'
        return next(error)
    }
        return next();   
    },
    
    (req,resp,next)=>{
    resp.setHeader('Content-Type','application/json');
    resp.status(200);
    resp.json({
        browser: req.userAgent(),
        method: req.method,
        url: req.href(),
        query: req.query
    });
    return next();    
}]);


server.listen(3000,()=>{
    console.log('API está rodando em http://localhost:3000')
})