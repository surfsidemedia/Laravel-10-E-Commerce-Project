var firstTime = localStorage.getItem("first_time");
if (!firstTime) {
    $(window).on('load', function () {
        setTimeout(function () {
            $('#newsletter').modal('show');
        }, 500);
    });
    localStorage.setItem("first_time", "1");
}