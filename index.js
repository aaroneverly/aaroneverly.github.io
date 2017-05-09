  function passWord() {
    var answer = prompt ("Enter Password") ;
    var psw = "NemoDesigns2017";


    if(answer == psw){
        window.open("content/new_resume.pdf");
    } 
    else {
      alert("Incorrect");
    }
}
