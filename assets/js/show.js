
  $('#darkm').click(function() {
    let mainSheet = $('#change').attr('class');
    if(mainSheet == "template-color-1 spybody white-version"){
        $('#change').attr('class','template-color-1 spybody');
        $('#myimage').attr('class','dkimage');
        // $('#fab').attr('class','fab');
    }   
    else{
        $('#change').attr('class','template-color-1 spybody white-version');
        $('#myimage').attr('class','ltimage');      
        // $('#fab').attr('class','fabs');
    }
});

$('#darkm2').click(function() {
    let mainSheet = $('#change').attr('class');
    if(mainSheet == "template-color-1 spybody white-version"){
        $('#change').attr('class','template-color-1 spybody');
        $('#myimage').attr('class','dkimage');
    }    
    else{
        $('#change').attr('class','template-color-1 spybody white-version');
        $('#myimage').attr('class','ltimage');     
    }
});
