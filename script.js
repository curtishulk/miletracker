document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('notify-form');
    var emailInput = document.getElementById('email-input');
    var iphoneButton = document.getElementById('get-iphone-btn');
    var androidButton = document.getElementById('get-android-btn');

    function trackCtaClick(label) {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'click', {
                event_category: 'CTA',
                event_label: label,
                value: 1
            });
        } else if (typeof window.ga === 'function') {
            window.ga('send', 'event', 'CTA', 'click', label);
        } else if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push({
                event: 'cta_click',
                cta_label: label
            });
        }
    }

    if (iphoneButton) {
        iphoneButton.addEventListener('click', function () {
            trackCtaClick('Get for iPhone');
        });
    }

    if (androidButton) {
        androidButton.addEventListener('click', function () {
            trackCtaClick('Get for Android');
        });
    }

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
