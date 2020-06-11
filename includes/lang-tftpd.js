PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         [PR['PR_PLAIN'], /^[ \t\r\n\f]+/, null, ' \t\r\n\f'],
        ],
        [
         [PR['PR_COMMENT'], /^#[^\r\n]*/],
         ['lang-tftpd-flags', /^(\w+)\s+(?:[^\n]+)/],
         [PR['PR_TYPE'], /^\([^)]*\)/],
         [PR['PR_VARIABLE'], /^\\\d+/],
         [PR['PR_LITERAL'], /^(?:\d+|\d*\.\d+)/i],
         [PR['PR_PLAIN'], /^[a-z_][\w-]*/i],
         [PR['PR_PUNCTUATION'], /^[^\s\w\'\"\\()]+/]
        ]),
    ['tftpd']);

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [],
        [
         [PR['PR_KEYWORD'], /^\w+/]
        ]),
    ['tftpd-flags']);
