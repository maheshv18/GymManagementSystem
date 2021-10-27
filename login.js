function web()
{
    var x, y, x1;
    x = document.getElementById("name").value;
    y = document.getElementById("pass").value;
    x1 = document.getElementById("name1").value;
    if(x=="Ajay" && y=="ajay")
    {
        alert("Acess Provided To "+ x);
        window.open("Main_Page.html");

    }
    else if(x=="Balaram" && y=="balaram")
    {
        alert("Acess Provided To "+ x);
        window.open("Main_Page.html");
    }
    else if(x=="Dheeraj" && y=="dheeraj")
    {
        alert("Acess Provided To "+ x);
        window.open("Main_Page.html");
    }
    else if(x=="Mahesh" && y=="mahesh")
    {
        alert("Acess Provided To "+ x);
        window.open("Main_Page.html");
    }
    else if(x=="Kailash" && y=="kailash")
    {
        alert("Acess Provided To "+ x);
        window.open("Main_Page.html");
    }
    else if(x=="Kaleem" && y=="kaleem")
    {
        alert("Acess Provided To "+ x);
        window.open("Main_Page.html");
    }
    else if(x1)
    {
        alert("Access Provided To Guest User '"+x1+"'");
        window.open("Main_Page.html");

    }
    else
    {
        alert("User Not Exist");
    }
    //-------------------------------
}