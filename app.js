  
        $('#submit').click((e)=>{
            e.preventDefault()
            fun()
       })

       function fun()
       { let query = $('#query').val();
           fetch(`https://ifsc.razorpay.com/${query}`)
 .then(
   function(response) {
     if (response.status !== 200) {
       console.log('Looks like there was a problem. Status Code: ' +
         response.status);
       return;
     }

    
     response.json().then(function(data) {
         //console.log(data)
        $('#ADDRESS').html(data.ADDRESS)
        $('#BANK').html(data.BANK)
        $('#BANKCODE').html(data.BANKCODE)
        $('#BRANCH').html(data.BRANCH)
        $('#CITY').html(data.CITY)
       //  $('#CONTACT').html(data.CONTACT)
        $('#DISTRICT').html(data.DISTRICT)
        $('#IFSC').html(data.IFSC)
        $('#RTGS').html(data.RTGS)
        $('#STATE').html(data.STATE)
        
        
     });
   }
 )
 .catch(function(err) {
   console.log('Fetch Error :-S', err);
 });
           
       }
 