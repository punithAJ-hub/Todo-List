const express =  require("express");
const bodyParser = require("body-parser");
const date =  require(__dirname+"/date.js");


const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine" , 'ejs');

app.use(express.static('public'));

var newListItems = [];
var workItems = [];

app.listen( 3000 , function(request, response){
    console.log("App is running on port 3000");
});


app.get( "/" , function(req, res){

    var today = date();

    res.render("list" , {ListTittle : today , newItems : newListItems });
});


app.post("/addItem" , function(request, response){

    console.log("type of list " + request.body.listType);
    if(request.body.listType === "Work"){
        workItems.push(request.body.newItem);
        response.redirect("/work");
    }

    else{
        newListItems.push(request.body.newItem);
        response.redirect("/");
    }

    
    
});


app.get("/work" , function(req,res){
    res.render('list' , {ListTittle : "Work List" , newItems : workItems});
});



