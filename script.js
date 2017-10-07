
    $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;

        // passes on every "a" tag
        $("#navbar a").each(function() {
            // checks if it's the same on the address bar
            if (url == (this.href)) {
                $(this).addClass("active");
                //for making parent of submenu active
               /*$(this).closest("li").parent().parent().addClass("active");*/
            }
        });
    });        
