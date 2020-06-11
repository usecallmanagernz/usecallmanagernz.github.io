PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         [PR['PR_PLAIN'], /^[ \t\r\n\f]+/, null, ' \t\r\n\f'],
         [PR['PR_STRING'], /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null, '"'],
        ],
        [
         [PR['PR_COMMENT'], /^;[^\r\n]*/],
         [PR['PR_SOURCE'], /^\[[\w\-]+\](?![\w,\-])/i],
         ['lang-astparking-template', /^\(([\w\!\-,]+)\)/i],
         [PR['PR_KEYWORD'], /^(?:park|first|next|default)(?=[^\-\w]|$)/],
	 [PR['PR_PLAIN'], /^([\w\-]+)=/],
         [PR['PR_LITERAL'], /^(?:\d+|\d*\.\d+)/i],
         [PR['PR_LITERAL'], /^(?:yes|no)(?![-\w]+)/i],
         [PR['PR_PLAIN'], /^[a-z_][\w-]*/i],
         [PR['PR_PUNCTUATION'], /^[^\s\w\'\"]+/]
        ]),
    ['astparking']);

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [],
        [
         [PR['PR_FUNCTION'], /^[!\w\-]+/i]
        ]),
    ['astparking-template']);
