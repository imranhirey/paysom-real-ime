// simple express server
const express = require('express');
const {intents,subscribtion,paysom} = require('paysom')
const app = express();
const port = 3009;
// cors
const cors = require('cors');
// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
paysom.config({
    publish_key:'Pfa60584b-a941-40c1-b398-61f78735b6ea',
    secret_key:'S7811d8a4-90f8-4222-b408-947e9aa9851d'
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});
// payment route
let count=1
app.post('/pay',async (req,res)=>{
   if (req.body.totalPrice){
    let intent = await intents.createintent({
        amount:req.body.totalPrice,
        reason:'book purchasing',
        surl:'http://144.126.252.62:3009/success',
        furl:'http://144.126.252.62:3009/fail'
    })
    res.send({
        status:'success',
           data:intent
  })
   }


})
app.post('/track',async(req,res)=>{
    console.log(req.body)
    let status= await intents.trackintent(req.body.paymentId)
    count=count+1
    let data = req.body
    console.log(data)
    res.send({
        status:status
    })

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));