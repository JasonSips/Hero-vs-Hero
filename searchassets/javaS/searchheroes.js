$(document).ready(function(){
    $('#searchName').keyup(function(){      
        $('#result').html('');  
    });

    $('#searchButton').on("click", function(){
        console.log("this works");
        var searchTerm = $('#searchName').val().trim();
        console.log(searchTerm);

        var api= 'https://superheroapi.com/api';
        var apikey= '/10156607121966195/search/';
        var url= api + apikey + searchTerm;
        console.log(url);
        
        //SUS CODE BELOW
        // var expression = new RegExp(searchField, "i");

        $('searchTerm', function(){
            //CREATE FOR LOOP
            $('searchTerm', function () {
                $('searchName').keyup(function () {
                $('#result').html('');
            for (let i = " "; i = 0 < searchTermArray.length; i++);{
                    console.log('#result')
                }
                var searchName = $('#searchName').val();
                // var expression = new RegExp(searchName, "i");
                {
                    console.log(searchName)
                }
                $.getJSON('#searchName', function(data){
                    $.each(url, function(data){
                    //     if(value.name.search) > -1;
                    // })

                });

            });

        });
    });
});









            //     $.each(searchName, function(key, value){
            //     console.log(searchName)
            // });
            
            
            
            // document.getElementById('#result') ??? possibly??




        //    $.each(data, function(key, value){
        //        if(value.name.search(expression) != -1 || value.number.search(expression) != -1)
        //        {
        //            $('#result').append('<li class="list-group-item"><img src="" '++value.image+' height="40" width="40" class="img-thumbnail" /> '+value.image+' | <span class="test-muted">'+value.number+'</span></li>');
        //        }
        //    }); 
 