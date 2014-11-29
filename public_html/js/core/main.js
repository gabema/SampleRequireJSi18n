
var locale = localStorage.getItem('locale') || navigator.language;

requirejs.config({
    baseUrl: 'js/libs',

    config: {
        i18n: {
         locale: locale
        }
    }
});

requirejs(['jquery', 'i18n!nls/testMessages'], function($, msgs) {
    $(document).ready(function(){
        $('#chooseLanguage').text(msgs.changeLanguage);

        var $languageSelector = $('.LanguageSelector');
        $languageSelector.children('option').filter('[value=' + locale + ']').attr('selected','selected');

        $('.WelcomeMessage').text(msgs.welcomeMesssage);

        $languageSelector.on('change', function() {
            chosenLocale = $languageSelector.children(':selected').val();
            if (chosenLocale.length === 0)
                localStorage.removeItem('locale');
            else
                localStorage.setItem('locale', chosenLocale);

            location.reload();
        });
    });
});
