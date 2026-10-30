const express=require("express");
const app=express();
const data=require("./data.js");
const methodOverride=require("method-override");
// console.log(data);

// app.use()


app.set("View Engine","views");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
// app.use(express.static())
app.get("/profile",(req,res)=>{
    res.render("profile.ejs",data);

})




app.get("/profile/create",(req,res)=>{
    res.render("createProfile.ejs");
})

app.post("/profile",(req,res)=>{
    let pinfo=req.body;
    pinfo["id"]="ig_0"+(data["data"].length+1000);
    data["data"].push(pinfo);
    res.redirect(`/profile`);

})


app.get("/profile/:id/edit",(req,res)=>{
    let {id}=req.params;
    let d1=data["data"].filter((ele)=>ele.id==id);
    res.render("editOne.ejs",d1[0]);
})

app.get("/profile/:id",(req,res)=>{
    let {id}=req.params;
    let profile=data["data"].filter((ele)=>ele.id==id);
    // console.log(profile);
    res.render("profileOne.ejs",profile[0]);
})
app.patch("/profile/:id/edit",(req,res)=>{
    let d1=req.body;
    let {id}=req.params;
    d1.id=id;
    console.log(d1);
    let d2=data["data"].filter((ele)=>ele.id==id);
    console.log(d2);
    let indx=data["data"].indexOf(d2[0]);
    data["data"].splice(indx,1,d1);
    res.redirect("/profile");

})
app.delete("/profile/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let fil=data["data"].filter((ele)=> ele.id == id);
    let ind=data["data"].indexOf(fil[0]);
    let dig=data["data"].splice(ind,1);
    res.redirect("/profile");
})








let port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("app is listening");
})
