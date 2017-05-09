  function passWord() {
    var answer = prompt ("Enter Password") ;
    var psw = "NemoDesigns2017";


    if(answer == psw){
        window.open("test.pdf");
    } 
    else {
      alert("Incorrect Password Try Again");
    }
}
