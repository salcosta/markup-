;(function($) {
    $.fn.extend({
        markupMarkdown: function() {
            var markupRegex = /^[ \t]*- *([\_\☐\○\uD83D\uDCC5]*) *#([\w_.]*) *([ -~]*)/mg;

            this.each(function() {
                var script = $(this).html().replace(/^[ ]*/mg, "");
                var parent = $(this).parent();
                var match = markupRegex.exec(script);

                while (match != null) {
                    var type = match[1];
                    var templateType = false;

                    switch (type) {
                        case '_':
                            templateType = 'text';
                            break;
                        case '☐':
                            templateType = 'checkbox';
                            break;
                        case '📅':
                            templateType = 'date';
                            break;
                    }

                    if (templateType) {
                        var templateContainer = $('[data-type="' + templateType + '"]')

                        if (templateContainer.length == 0) {
                            console.log("uhhh that doesnt exist");
                        } else {
                            var template = templateContainer.html();

                            var context = {
                                id: match[2],
                                name: match[3]
                            };

                            if (typeof template != 'undefined' && template != '') {
                                var template = Handlebars.compile(template);
                                var html = template(context);
                                var newMarkup = $.parseHTML(html);
                                parent.append(newMarkup);
                            }

                        }

                    }

                    match = markupRegex.exec(script);
                }

                $(this).remove();
            });

        }

    });

})(jQuery);