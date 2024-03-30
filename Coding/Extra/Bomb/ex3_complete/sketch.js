
var name;
var role;


function setup() 
{
    createCanvas(512,512);
    
    name = "Simon";
    role = "student";
    
    if(
        (name == "Simon" && role == "student") 
        || 
        (name == "Sabina" && role == "teacher")
    )
    {
        console.log("Welcome to goldsmiths");
    }
    else
    {
        console.log("Hey I don't know you");
    }
    
}










