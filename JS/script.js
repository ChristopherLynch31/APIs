$('#weather').click(function() {

    $.ajax({
        url: "../PHP/geonames.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            console.log(result);
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
           
        }
    }); 


});

$('#earthquakes').click(function() {

    $.ajax({
        url: "../PHP/geonames.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            console.log(result);
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    }); 


});

$('#countryInfo').click(function() {

    $.ajax({
        url: "../PHP/geonames.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            console.log(result);
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
    
        }
    }); 


});