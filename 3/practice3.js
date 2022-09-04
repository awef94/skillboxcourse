let pass = "sexPistols-1337";

let access1 = pass.includes("-");
let access2 = pass.includes("_");

if(pass.length >4 && access1 || access2){
    console.log("yay, u in");
}
else{
    console.log("u sux");
}

//------------------------------------------------------------------------

let name = "alex";
let surname = "ruban";

let firstCharName = name[0].toUpperCase();
let remCharsName = name.slice(1,name.length);

console.log(firstCharName + remCharsName);

//---------------------------------------------------------------------------