# markup-
markup²

###If you wanna take markdown and make it markup this is the library for you.

# Usage

One, set up the page like I did in the sample.  In fact just copy the sample.
You absolutely need to `utf-8` your doc.  Thats the `<meta charset="utf-8"/>` if you dont, it wont work.  Even more importantly you need handlebars and jQuery so may as well include those.


Two, modify the `text/handlebars` templates to be what you want.  id is the id name is the name.

Three, replace all your markup with markup² (maybe markdownup is a better name, too late i already created the repo).

    <script type="text/markup²">
    -_ #first_name Whats your name?
    -📅 #birthday Whats your birthday?
    -☐ #email Would you like email updates?
    </script>
    
That line _ is a text input.  I will probably change that to something more unicodey that looks like a text input.  Theres a rectangle but unless you use certain fonts in your code editor it wont look like anything.  As much as I love coding in Code2000 font, you really need fixed width.  The calendar is a date, the checkbox is a checkbox.  You really are gonna struggle to type those characters so I suggest copy and pasting.  The calendar is two characters wide, it really breaks in fixed width fonts.  Good luck with that.

Finally, markup your markdown.

    $('[type="text/markup²"]').markupMarkdown();
    
This absolutely needs to be under your templates.  Don't even try to run it above them.


