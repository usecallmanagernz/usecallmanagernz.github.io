PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         [PR['PR_PLAIN'], /^[ \t\r\n\f]+/, null, ' \t\r\n\f'],
        ],
        [
         [PR['PR_STRING'], /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/],
         [PR['PR_COMMENT'], /^[;#][^\r\n]*/],
         [PR['PR_LITERAL'], /^(?:\d+|\d*\.\d+|on|off|yes|no|true|false)\b/i],
         [PR['PR_PLAIN'], /^[a-z_][\w-]*/i],
         [PR['PR_PUNCTUATION'], /^[^\s\w\'\"]+/]
        ]),
    ['other']);
