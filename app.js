const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var newes= [];
app.get("/", function(req,res){
  var today= new Date();


var options={
  weekday: "long",
  day: "numeric",
  month: "long"
}
  var day=today.toLocaleDateString("en-US",options);

res.render("List",{kindofday: day,newy: newes});
});
app.post("/",function(req,res){
  console.log(req.body.work1);
var newe=req.body.work1;
newes.push(newe);
  res.redirect("/");
});
app.listen(3000,function(){
  console.log("Hello Amit");
});
//   var dayy="";
// switch(day) {
//   case 0:
//   dayy="sunday";
//   break;
//   case 1:
//   dayy="Monday";
//   break;
//   case 2:
//   dayy="Tuesday";
//   break;
//   case 3:
//   dayy="Wednesday";
//   break;
//   case 4:
//   dayy="Thrusday";
//   break;
//   case 5:
//   dayy="friday";
//   break;
//   case 6:
//   dayy="saturday";
//   break;
// default:
// console.log(day);
// }
