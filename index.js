  function passWord() {
    var answer = prompt ("Enter Password") ;
    var psw = "NemoDesigns2017";


    if(answer == psw){
        window.open("test.pdf");
    } 
    else {
      alery("nay");
    }
}