$(document).ready(function(){
    $("#signup-form").validate({
      rules:{
        fname:{
          required:true,
          minlength:4,
          maxlength:8
        },
        srname:{
          required:true,
          minlength:4
        },
        mail:{
          required:true,
          email:true
        },
        pass:{
          required:true,
          minlength:6
        },
        
        
        day:{
          required:true
        },
        month:{
          required:true
        },
        year:{
          required:true
        },
        Gender:{
          required:true
        }
      },
      messages:{
        fname:{
          required:"enter first name",
          minlength:"atleat enter 4 charecter"
        }
      }
    })
  })