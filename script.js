document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('notify-form');
    var emailInput = document.getElementById('email-input');
    var iphoneButton = document.getElementById('get-iphone-btn');
    var androidButton = document.getElementById('get-android-btn');

    function trackCtaClick(label, url) {
        var eventPayload = {
            event_category: 'CTA',
            button_name: label,
            value: 1
        };

        if (typeof window.gtag === 'function') {
            window.gtag('event', 'cta_click', eventPayload);
        }

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push({
                event: 'cta_click',
                button_name: label
            });
        }

        if (typeof url === 'string' && url && !url.startsWith('#')) {
            setTimeout(function () {
                window.location.href = url;
            }, 150);
        }
    }

    function showCtaFeedback(label) {
        var feedback = document.getElementById('cta-feedback');
        if (!feedback) {
            return;
        }

        feedback.textContent = 'Thanks for your interest. Give us your email below if you want to know when its available';
        setTimeout(function () {
            if (feedback.textContent === label + ' clicked! Thanks for your interest.') {
                feedback.textContent = '';
            }
        }, 3000);
    }

    if (iphoneButton) {
        iphoneButton.addEventListener('click', function (event) {
            event.preventDefault();
            showCtaFeedback('Get for iPhone');
            trackCtaClick('Get for iPhone', iphoneButton.getAttribute('href'));
        });
    }

    if (androidButton) {
        androidButton.addEventListener('click', function (event) {
            event.preventDefault();
            showCtaFeedback('Get for Android');
            trackCtaClick('Get for Android', androidButton.getAttribute('href'));
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
