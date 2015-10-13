Stamplay.init("webinars");

    function submit() {
      var emailInstance = new Stamplay.Cobject('obj').Model;
      var email = document.getElementById("email").value;
      console.log(email);
      emailInstance.set('address', email);
      emailInstance.save().then(function(){
        document.getElementById("email").value = "";
        alert('Check your email!');
      });
    }