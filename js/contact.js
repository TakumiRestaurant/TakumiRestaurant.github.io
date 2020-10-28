$(document).ready(function(){
    $(function() {
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        $("#submit_button").click(function() {
            if($("#name").val() !="" && $("#email").val() !="" && testEmail.test($("#email").val()) && $("#msg").val() !="") {
                $('#submit-success').modal('show');
            }
            else {
                $('#submit-failed').modal('show');
            }
        });
    });
});

