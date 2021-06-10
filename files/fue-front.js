(function($) {
    var email_fields = ["input#billing_email"];

    for ( var el in email_fields ) {
        var $field = $( email_fields[el] );

        $field.on( 'change', [el], update_user_email );
    }

    function update_user_email( event ) {
        if ( FUE_Front.is_logged_in ) {
            return;
        }

        var email = $(event.target).val();
        var first_name  = $("#billing_first_name").val();
        var last_name   = $("#billing_last_name").val();

        $.post( FUE_Front.ajaxurl, {
            action: "fue_wc_set_cart_email",
            email: email,
            first_name: first_name,
            last_name: last_name
        });

    }
})(jQuery);
