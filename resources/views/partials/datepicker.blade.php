@section('javascript')

    <script>
        $.fn.datepicker.dates['nl'] = {
            days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            daysShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            daysMin: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            months: ["januari", "februari", "maart", "april", "mei", "juni", "july", "augustus", "september", "october", "november", "december"],
            monthsShort: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
            today: "Vandaag",
            clear: "Wis",
            format: "dd-mm-yyyy",
            titleFormat: "MM yyyy", /* Leverages same syntax as 'format' */
            weekStart: 0
        };

        $(function(){
            $('.datepicker').datepicker({
                language: '{{ app()->getLocale() }}'
            });
        });
        /**
         * @todo implement something that prints the format above the form input.
         */
    </script>

@append