PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         [PR['PR_PLAIN'], /^[ \t\r\n\f]+/, null, ' \t\r\n\f'],
         [PR['PR_STRING'], /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null, '"'],
        ],
        [
         ['lang-astexten-variable', /^\${([a-z_]+)/i],
         ['lang-astexten-application', /^[,\?\):]([a-z_]+)\(/i],
         [PR['PR_SOURCE'], /^\[[\w\-]+\](?![\w,\-])/i],

         [PR['PR_KEYWORD'], /^(?:exten|same|next|hint|include|switch|ignorepat)(?=[^\-\w]|$)/],
         [PR['PR_COMMENT'], /^;[^\r\n]*/],
         [PR['PR_LITERAL'], /^(?:\d+|\d*\.\d+)/i],
         [PR['PR_PLAIN'], /^[a-z_][\w-]*/i],
         [PR['PR_PUNCTUATION'], /^[^\s\w\'\"\$\?]+/]
        ]),
    ['astexten']);

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [],
        [
         [PR['PR_VARIABLE'], /^[a-z_]+/i],
        ]),
    ['astexten-variable']);

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [],
        [
         [PR['PR_FUNCTION'], /^[a-z_]+/i],
        ]),
    ['astexten-application']);

