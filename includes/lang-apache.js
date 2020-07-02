PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
         [PR['PR_PLAIN'], /^[ \t\r\n\f]+/, null, ' \t\r\n\f'],
        ],
        [
         [PR['PR_STRING'], /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null],
         [PR['PR_COMMENT'], /^#[^\r\n]*/],
         [PR['PR_LITERAL'], /^(?:on|off|all|granted|none|nocase|last|user|group|home|threads)(?=[^\-\w]|$)/],
	 [PR['PR_VARIABLE'], /(?:\$\d+|%\{[\w:_]+\})/i],
         [PR['PR_LITERAL'], /^(?:\d+|\d*\.\d+)/i],
	 [PR['PR_KEYWORD'], /^(followsymlinks)(?=[^\-\w]|$)/i],
         [PR['PR_TYPE'], /^(\w+_module)$/],
         ['lang-apache-section', /^(<\/?[^>]+>)/i],
	 ['lang-apache-rewriterule', /^rewriterule\s+(\S+)/i],
	 [PR['PR_PLAIN'], /^[a-z_][\w-]*/i],
         [PR['PR_PUNCTUATION'], /^[^\s\w\'\"\$\%]+/]
        ]),
    ['apache']);

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [],
        [
         [PR['PR_PUNCTUATION'], /^(?:<\/?|\/?>)/i],
         [PR['PR_TAG'], /^[a-z](?:[\w.:-]*\w)?$/i],
         ['lang-apache', /^[a-z](?:[\w.:-]*\w)?\s*([\s\S]+)$/i]
        ]),
    ['apache-section']);

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [],
        [
	 [PR['PR_TYPE'], /^\((.*)\)/],
	]),
    ['apache-rewriterule']);
