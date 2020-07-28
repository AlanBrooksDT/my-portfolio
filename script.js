document.getElementById("btnsubmit").addEventListener("click", function(){
    document.getElementById("confirmSent").src='sent.gif'; 
    /*event.preventDefault();*/
    var nameVal = document.getElementById("name");
    var email = document.getElementById("mail");
    var textArea = document.getElementById("msg");
    window.alert("Name: " + nameVal.value + "\r\n\r\n" + "E-mail: " + email.value + "\r\n\r\n" + "Message: " + textArea.value);
    });

document.getElementById("btnreset").addEventListener("click", function(){
    window.location.reload();});

document.getElementById("name").addEventListener("click", function(){
    document.getElementById("name").value="";
    })

document.getElementById("mail").addEventListener("click", function(){
    document.getElementById("mail").value="";
    })