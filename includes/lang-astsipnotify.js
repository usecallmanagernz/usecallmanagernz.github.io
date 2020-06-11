PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         [PR['PR_PLAIN'], /^[ \t\r\n\f]+/, null, ' \t\r\n\f'],
         [PR['PR_STRING'], /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null, '"'],
        ],
        [
	 [PR['PR_COMMENT'], /^;[^\r\n]*/],
	 ['lang-astsipnotify-variable', /^\${(\w+)/i],
         [PR['PR_SOURCE'], /^\[[\w\-]+\](?![\w,\-])/i],
         [PR['PR_KEYWORD'], /^(?:service-control|active|restart|reset)/i],
         [PR['PR_LITERAL'], /^(?:\d+|\d*\.\d+)/i],
         [PR['PR_PLAIN'], /^[a-z_][\w-]*/i],
         [PR['PR_PUNCTUATION'], /^[^\s\w\'\"\$]+/]
        ]),
    ['astsipnotify']);

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [],
        [
         [PR['PR_VARIABLE'], /^\w+/i],
        ]),
    ['astsipnotify-variable']);
