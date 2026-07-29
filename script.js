document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('notify-form');
    var emailInput = document.getElementById('email-input');

    if (!form || !emailInput) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var email = emailInput.value.trim();

        if (!email) {
            emailInput.focus();
            return;
        }

        alert('Thanks! We will notify you at: ' + email);
        form.reset();
    });
});
