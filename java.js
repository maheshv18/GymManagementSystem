function validate()
{
    var result = true;
    var n=document.getElementById("name").value,count=0,spacecount=0;
    count = parseInt(count);
    spacecount = parseInt(spacecount);
    for(i=0;i<n.length;i++)
    {
        if((n[i]>='a'&& n[i]<='z')||(n[i]>='A'&&n[i]<='Z'))
        {
            count++;
        }
        else if(n[i]==' ')
        {
            spacecount++;
        }
    }
    if(((n.length-spacecount)<=3)||((spacecount + count)!=n.length))
    {
        document.getElementsByClassName("txtb")[0].style.borderColor="red";
        document.getElementsByClassName("txtb")[0].style.borderWidth="4px";
        window.alert("special characters and more spaces are not allowed.")
        result = false;
    }
    else
    {
        document.getElementsByClassName("txtb")[0].style.borderColor="green";
        document.getElementsByClassName("txtb")[0].style.borderWidth="3px";
    }
 var mail = document.getElementById("email").value;
atindex=mail.indexOf('@');
ldotindex=mail.lastIndexOf('.');
dotindex=mail.indexOf('.');
atindex = parseInt(atindex);
dotindex = parseInt(dotindex);
ldotindex= parseInt(ldotindex);
if(atindex < 1 || dotindex > (mail.length - 2) || dotindex - atindex < 3|| atindex - ldotindex>0 )
{
result = false;
document.getElementsByClassName("txtb")[2].style.borderColor="red";
document.getElementsByClassName("txtb")[2].style.borderWidth="4px";
window.alert(mail + " email Id cannot exist.");
}
else{
document.getElementsByClassName("txtb")[2].style.borderColor="green";
document.getElementsByClassName("txtb")[2].style.borderWidth="3px";
}
count=0;
var ph=document.getElementById("phone").value;
if(ph.length==10)
{
    for(i=0;i<ph.length;i++)
    {
        if(ph[i]>='0'&&ph[i]<=9)
        count++;
    }
    if(count==10)
    {
    document.getElementsByClassName("txtb")[3].style.borderColor="green";
    document.getElementsByClassName("txtb")[3].style.borderWidth="3px";
    }
    else
    {
    result = false;
    document.getElementsByClassName("txtb")[3].style.borderColor="red";
    document.getElementsByClassName("txtb")[3].style.borderWidth="4px";
    window.alert("Enter a proper 10 digit number.");
    }
}
else
{
   result = false;
   window.alert("A proper 10 digited number is expected.");
   document.getElementsByClassName("txtb")[3].style.borderColor="red";
   document.getElementsByClassName("txtb")[3].style.borderWidth="4px";
}
var msg=document.getElementById("tarea").value;
if(msg.length < 10)
{
    result = false;
    window.alert("At least full sentence is expected...");
    document.getElementsByClassName("txtb")[4].style.borderColor="red";
    document.getElementsByClassName("txtb")[4].style.borderWidth="4px";
}
else 
{
    window.confirm("Thank you for Your valuable feedback.Do You want to continue....");
    document.getElementsByClassName("txtb")[4].style.borderColor="green";
    document.getElementsByClassName("txtb")[4].style.borderWidth="3px";
    document.getElementsByClassName("txtb")[3].style.borderColor="green";
    document.getElementsByClassName("txtb")[3].style.borderWidth="3px";
}
return result;
}
