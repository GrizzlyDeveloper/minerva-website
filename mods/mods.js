// node_modules/.pnpm/marked@18.2.0/node_modules/marked/lib/marked.esm.js
function j() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var y = j();
function ie(l3) {
  y = l3;
}
var D = { exec: () => null };
function B(l3) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), s = e[n];
    return s || (s = l3(n), e[n] = s), s;
  };
}
function h(l3, e = "") {
  let t = typeof l3 == "string" ? l3 : l3.source, n = { replace: (s, i) => {
    let r = typeof i == "string" ? i : i.source;
    return r = r.replace(T.caret, "$1"), t = t.replace(s, r), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var we = ((l3 = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + l3);
  } catch {
    return false;
  }
})();
var T = { codeRemoveIndent: /^(?: {0,3}\t| {1,4})/gm, listInterruptsParagraph: /^ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, endingSpaceTabChar: /[ \t]$/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, leadingSpaceTab: /^[ \t]+/, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, blockquoteMarkerWhitespace: /^( {0,3}>)([ \t]+)/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\][ \t]+\S/, listReplaceTask: /^\[[ xX]\][ \t]+/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, numericCharacterReference: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/, numericCharacterReferenceOrAmpersand: /&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: B((l3) => new RegExp(`^ {0,${l3}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: B((l3) => new RegExp(`^ {0,${l3}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)), fencesBeginRegex: B((l3) => new RegExp(`^ {0,${l3}}(?:\`\`\`|~~~)`)), headingBeginRegex: B((l3) => new RegExp(`^ {0,${l3}}#{1,6}(?:\\s|$)`)), pedanticHeadingBeginRegex: B((l3) => new RegExp(`^ {0,${l3}}#`)), htmlBeginRegex: B((l3) => new RegExp(`^ {0,${l3}}(?:</?(?:${K})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`, "i")), blockquoteBeginRegex: B((l3) => new RegExp(`^ {0,${l3}}>`)), nestedContainerMarkers: /^(?: {0,3}(?:(?:[*+-]|\d{1,9}[.)])[ \t]+|>[ \t]?))+/ };
var He = /^(?:[ \t]*(?:\n|$))+/;
var je = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Ge = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/;
var W = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Ne = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var ae = / {0,3}(?:[*+-]|\d{1,9}[.)])/;
var Pe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/;
var ye = h(Pe).replace(/bull/g, ae).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Fe = h(Pe).replace(/bull/g, ae).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}(?:\s|$)/).replace(/hr/g, / {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var le = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/;
var Qe = /^[^\n]+/;
var ue = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/;
var Ue = h(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ue).replace("title", /(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex();
var We = h(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g, ae).getRegex();
var K = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var pe = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Ke = h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", pe).replace("tag", K).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var Se = (l3) => h(le).replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", l3).replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex();
var Xe = Se(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/);
var Ve = Se(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/);
var Je = h(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph", Ve).getRegex();
var ce = { blockquote: Je, code: je, def: Ue, fences: Ge, heading: Ne, hr: W, html: Ke, lheading: ye, list: We, newline: He, paragraph: Xe, table: D, text: Qe };
var Re = h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex();
var Ye = { ...ce, lheading: Fe, table: Re, paragraph: h(le).replace("hr", W).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html", " {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag", K).getRegex() };
var et = { ...ce, html: h(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment", pe).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: D, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: h(le).replace("hr", W).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ye).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var tt = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var nt = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var _e = /^( {2,}|\\)\n(?!\s*$)[ \t]*/;
var rt = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var $ = /[\p{P}\p{S}]/u;
var G = /[\s\p{P}\p{S}]/u;
var X = /[^\s\p{P}\p{S}]/u;
var st = h(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, G).getRegex();
var it = /[\p{Pi}\p{Ps}"']/u;
var $e = /(?!~)[\p{P}\p{S}]/u;
var ot = /(?!~)[\s\p{P}\p{S}]/u;
var at = /(?:[^\s\p{P}\p{S}]|~)/u;
var lt = h(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", we ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var Le = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/;
var ut = h(Le, "u").replace(/punct/g, $).getRegex();
var pt = h(Le, "u").replace(/punct/g, $e).getRegex();
var ct = /^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/;
var ht = h(ct, "u").replace(/openQuote/g, it).replace(/punct/g, $).getRegex();
var Ce = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var dt = h(Ce, "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, G).replace(/punct/g, $).getRegex();
var gt = h(Ce, "gu").replace(/notPunctSpace/g, at).replace(/punctSpace/g, ot).replace(/punct/g, $e).getRegex();
var kt = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)";
var ft = h(kt, "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, G).replace(/punct/g, $).getRegex();
var mt = h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, G).replace(/punct/g, $).getRegex();
var xt = "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)";
var bt = h(xt, "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, G).replace(/punct/g, $).getRegex();
var Rt = h(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, $).getRegex();
var Tt = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)";
var Ot = h(Tt, "gu").replace(/notPunctSpace/g, X).replace(/punctSpace/g, G).replace(/punct/g, $).getRegex();
var wt = h(/\\(punct)/, "gu").replace(/punct/g, $).getRegex();
var Pt = h(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/, "gu").replace(/punct/g, $).getRegex();
var yt = h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var St = h(pe).replace("(?:-->|$)", "-->").getRegex();
var _t = h("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", St).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var Ie = /\[(?:\\[\s\S]|[^\[\]\\])*\]/;
var re = h(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets", Ie).getRegex();
var $t = h(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label", re).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title", /"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex();
var Lt = h(/^!?\[(label)\]\[(ref)\]/).replace("label", re).replace("ref", ue).getRegex();
var Ct = h(/^!?\[(ref)\](?:\[\])?/).replace("ref", ue).getRegex();
var Te = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/;
var It = h(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets", Ie).getRegex();
var At = h("reflink|nolink(?!\\()", "g").replace("reflink", h(/^!?\[(label)\]\[(ref)\]/).replace("label", It).replace("ref", Te).getRegex()).replace("nolink", h(/^!?\[(ref)\](?:\[\])?/).replace("ref", Te).getRegex()).getRegex();
var Oe = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var Et = /[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/;
var zt = h(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g, Et).getRegex();
var he = { _backpedal: D, anyPunctuation: wt, anyPunctuationOutsideCode: Pt, autolink: yt, blockSkip: lt, br: _e, code: nt, del: D, delLDelim: D, delRDelim: D, emStrongLDelim: ut, emStrongRDelimAst: dt, emStrongRDelimUnd: mt, escape: tt, link: $t, nolink: Ct, punctuation: st, reflink: Lt, reflinkSearch: At, tag: _t, text: rt, url: D };
var Mt = { ...he, emStrongLDelim: ht, emStrongRDelimAst: ft, emStrongRDelimUnd: bt, link: h(/^!?\[(label)\]\((.*?)\)/).replace("label", re).getRegex(), reflink: h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", re).getRegex() };
var oe = { ...he, emStrongRDelimAst: gt, emStrongLDelim: pt, delLDelim: Rt, delRDelim: Ot, url: h(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol", zt).replace("protocol", Oe).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: h(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol", Oe).replace(/emailProtocol/g, /(?:mailto|xmpp):/).replace("wwwStart", we ? "(?<![^\\s*_~(])www\\." : "www\\.").getRegex() };
var Bt = { ...oe, br: h(_e).replace("{2,}", "*").getRegex(), text: h(oe.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var V = { normal: ce, gfm: Ye, pedantic: et };
var N = { normal: he, gfm: oe, breaks: Bt, pedantic: Mt };
var Dt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Ae = (l3) => Dt[l3];
function P(l3, e) {
  if (e) {
    if (T.escapeTest.test(l3)) return l3.replace(T.escapeReplace, Ae);
  } else if (T.escapeTestNoEncode.test(l3)) return l3.replace(T.escapeReplaceNoEncode, Ae);
  return l3;
}
function Ee(l3) {
  return T.numericCharacterReference.test(l3) ? l3.replace(T.numericCharacterReferenceOrAmpersand, (e, t, n) => {
    if (t === void 0 && n === void 0) return "&amp;";
    let s = t === void 0 ? Number.parseInt(n, 16) : Number.parseInt(t, 10);
    return s === 0 || s > 1114111 || s >= 55296 && s <= 57343 ? "\uFFFD" : s === 38 ? "&amp;" : String.fromCodePoint(s);
  }) : l3;
}
function de(l3) {
  try {
    l3 = encodeURI(l3).replace(T.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function ge(l3, e) {
  let t = l3.replace(T.findPipe, (i, r, o) => {
    let a = false, p = r;
    for (; --p >= 0 && o[p] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), n = t.split(T.splitPipe), s = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; s < n.length; s++) n[s] = n[s].trim().replace(T.slashPipe, "|");
  return n;
}
function L(l3, e, t) {
  let n = l3.length;
  if (n === 0) return "";
  let s = 0;
  for (; s < n; ) {
    let i = l3.charAt(n - s - 1);
    if (i === e && !t) s++;
    else if (i !== e && t) s++;
    else break;
  }
  return l3.slice(0, n - s);
}
function ke(l3) {
  let e = l3.split(`
`), t = e.length - 1;
  for (; t >= 0 && T.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? l3 : e.slice(0, t + 1).join(`
`);
}
function Q(l3) {
  return l3.trim().replace(T.multipleSpaceGlobal, " ").toLowerCase().toUpperCase().toLowerCase();
}
function fe(l3, e) {
  if (l3.indexOf(e[0]) === -1 && l3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < l3.length; n++) if (l3[n] === "\\") n++;
  else if (l3[n] === e[0]) t++;
  else if (l3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
var F = /* @__PURE__ */ new WeakMap();
function me(l3) {
  let e = { "*": -1, _: -1 }, t = -1, n = l3.length;
  for (let s = 0; s < n; s++) {
    let i = l3[s];
    if (i !== "*" && i !== "_" && i !== "~") continue;
    let r = s === 0 ? `
` : l3[s - 1], o = s + 1;
    for (; o < n && l3[o] === i; ) o++;
    r !== " " && r !== "	" && r !== `
` && r !== "\r" && r !== "\f" && (i === "~" ? t = s : e[i] = s), s = o - 1;
  }
  return { maskedSrc: l3, lastPossibleEmStrongCloserIndex: e, lastPossibleDelCloserIndex: t };
}
function ze(l3, e) {
  let t = me(e), n = F.get(l3);
  n ? n.push(t) : F.set(l3, [t]);
}
function Me(l3) {
  let e = F.get(l3);
  e && (e.pop(), e.length === 0 && F.delete(l3));
}
function Be(l3, e, t) {
  let n = F.get(l3)?.at(-1);
  return n && n.maskedSrc === e ? n.lastPossibleEmStrongCloserIndex[t] : me(e).lastPossibleEmStrongCloserIndex[t];
}
function De(l3, e) {
  let t = F.get(l3)?.at(-1);
  return t && t.maskedSrc === e ? t.lastPossibleDelCloserIndex : me(e).lastPossibleDelCloserIndex;
}
function J(l3, e = 0) {
  let t = e, n = "";
  for (let s of l3) if (s === "	") {
    let i = 4 - t % 4;
    n += " ".repeat(i), t += i;
  } else n += s, t++;
  return n;
}
function qe(l3, e, t, n, s) {
  let i = e.href, r = e.title || null, o = l3[1].replace(s.other.outputLinkReplace, "$1"), a = l3[0].charAt(0) === "!", p = n.state.inLink, c = n.state.linkEmitted, u = n.state.inRawBlock;
  n.state.inLink = true, n.state.linkEmitted = false;
  let d = n.inlineTokens(o), k = n.state.linkEmitted;
  if (n.state.linkEmitted = c, n.state.inLink = p, !a) {
    if (k) {
      n.state.inRawBlock = u;
      return;
    }
    n.state.linkEmitted = true;
  }
  return { type: a ? "image" : "link", raw: t, href: i, title: r, text: o, tokens: d };
}
function qt(l3, e, t) {
  let n = l3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let s = n[1];
  return e.split(`
`).map((i) => {
    let r = i.match(t.other.beginningSpace);
    if (r === null) return i;
    let [o] = r;
    return i.slice(Math.min(o.length, s.length));
  }).join(`
`);
}
function ve(l3, e, t, n) {
  if (!e.includes("<")) return false;
  for (let s = 0; s < e.length; s++) {
    if (e[s] === "\\") {
      s++;
      continue;
    }
    if (e[s] === "`") {
      let o = n.inline.code.exec(e.slice(s));
      if (o) {
        s += o[0].length - 1;
        continue;
      }
    }
    if (e[s] !== "<") continue;
    let i = l3.slice(t + s), r = n.inline.tag.exec(i) || n.inline.autolink.exec(i);
    if (r) {
      if (r[0].length > e.length - s) return true;
      s += r[0].length - 1;
    }
  }
  return false;
}
var _ = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || y;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = this.options.pedantic ? t[0] : ke(t[0]), s = n.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: n, codeBlockStyle: "indented", text: s };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], s = qt(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: s };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let s = L(n, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceTabChar.test(s)) && (n = s.trim());
      }
      return { type: "heading", raw: L(t[0], `
`), depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: L(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = L(t[0], `
`).split(`
`), s = "", i = "", r = [];
      for (; n.length > 0; ) {
        let o = false, a = [], p;
        for (p = 0; p < n.length; p++) if (this.rules.other.blockquoteStart.test(n[p])) a.push(n[p]), o = true;
        else if (!o) a.push(n[p]);
        else break;
        n = n.slice(p);
        let c = a.join(`
`), u = c.replace(this.rules.other.blockquoteMarkerWhitespace, (g, b, f) => b + J(f, b.length)).replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${c}` : c, i = i ? `${i}
${u}` : u;
        let d = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(u, r, true), this.lexer.state.top = d, n.length === 0) break;
        let k = r.at(-1);
        if (k?.type === "code" || k?.type === "heading" || k?.type === "hr" || k?.type === "html" || k?.type === "table") break;
        if (k?.type === "blockquote") {
          let g = k, b = n.join(`
`), f = g.raw + `
` + b.replace(this.rules.other.blockquoteSetextReplace2, ""), m = this.blockquote(f);
          r[r.length - 1] = m;
          let S = f.substring(m.raw.length).replace(/^\n/, ""), R = S ? S.split(`
`).length : 0, A = R ? n.slice(0, -R) : n;
          if (A.length > 0 && (s = `${s}
${A.join(`
`)}`), i = i.substring(0, i.length - g.text.length) + m.text, n = n.slice(A.length), n.length > 0 && this.rules.other.blockquoteStart.test(n[0])) continue;
          break;
        } else if (k?.type === "list") {
          let g = k, b = g.raw + `
` + n.join(`
`), f = this.list(b);
          r[r.length - 1] = f;
          let m = f.raw.length > g.raw.length ? b.slice(g.raw.length + 1, f.raw.length).split(`
`).length : 0;
          if (m > 0) {
            let S = n.slice(0, m).join(`
`);
            s = `${s}
${S}`, i = `${i}
${S}`;
          }
          n = n.slice(m);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: r, text: i };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      if (!this.options.pedantic && this.lexer.state.lastToken?.type === "text" && !this.rules.other.listInterruptsParagraph.test(e)) return;
      let n = e, s = () => n.length - e.length, i = t[1].trim(), r = i.length > 1, o = { type: "list", raw: "", ordered: r, start: r ? +i.slice(0, -1) : "", loose: false, items: [] };
      i = r ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = r ? i : "[*+-]");
      let a = this.rules.other.listItemRegex(i), p = false;
      for (; e; ) {
        let u = false, d = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        let k = s();
        e = e.substring(t[0].length);
        let g = t[2].split(`
`, 1)[0], b = t[1].length, f = this.options.pedantic ? J(g, b) : g.replace(this.rules.other.leadingSpaceTab, (v) => J(v, b)), m = e.split(`
`, 1)[0], S = !f.trim(), R = 0;
        if (this.options.pedantic ? (R = 2, d = f.trimStart()) : S ? R = b + 1 : (R = f.search(this.rules.other.nonSpaceChar), R = R > 4 ? 1 : R, d = f.slice(R), R += b), S && this.rules.other.blankLine.test(m) && (e = e.substring(m.length + 1), u = true), !u) {
          let v = this.rules.other.nextBulletRegex(R), U = this.rules.other.hrRegex(R), ee = this.rules.other.fencesBeginRegex(R), te = this.options.pedantic ? this.rules.other.pedanticHeadingBeginRegex(R) : this.rules.other.headingBeginRegex(R), M = this.rules.other.htmlBeginRegex(R), ne = this.rules.other.blockquoteBeginRegex(R), Z = false;
          for (; e; ) {
            let xe = e.split(`
`, 1)[0], H;
            if (m = xe, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), H = m) : H = m.replace(this.rules.other.leadingSpaceTab, (be) => J(be)), ee.test(m) || te.test(m) || M.test(m) || ne.test(m) || v.test(m) || U.test(m)) break;
            if (H.search(this.rules.other.nonSpaceChar) >= R || !m.trim()) d += `
` + H.slice(R), Z = false;
            else {
              if (S || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ee.test(f) || te.test(f) || M.test(f) || U.test(f)) break;
              if (!this.options.pedantic && !Z) {
                let se = f.replace(this.rules.other.nestedContainerMarkers, "");
                if (this.rules.block.fences.test(se) || this.rules.block.heading.test(se) || this.rules.block.hr.test(se)) break;
              }
              let Ze = !this.options.pedantic && /^ {0,3}(?:=+|-+) *$/.test(m) && this.rules.block.lheading.test(`${f}
${m}`) ? `    ${H.replace(/^ {0,3}/, "")}` : m;
              d += `
` + Ze, Z = true;
            }
            S = !m.trim(), e = e.substring(xe.length + 1), f = H.slice(R);
          }
        }
        let A = n.slice(k, s());
        o.loose || (p ? o.loose = true : this.rules.other.doubleBlankLine.test(A) && (p = true)), o.items.push({ type: "list_item", raw: A, task: !!this.options.gfm && this.rules.other.listIsTask.test(d), loose: false, text: d, tokens: [] });
      }
      let c = o.items.at(-1);
      if (c) c.raw = c.raw.trimEnd(), c.text = c.text.trimEnd();
      else return;
      o.raw = n.slice(0, s()).trimEnd();
      for (let u of o.items) if (this.lexer.state.top = false, u.tokens = this.lexer.blockTokens(u.text, []), !o.loose) {
        let d = u.tokens.filter((g) => g.type === "space"), k = d.length > 0 && d.some((g) => this.rules.other.anyLine.test(g.raw));
        o.loose = k;
      }
      for (let u of o.items) {
        let d = u.tokens[0];
        if (u.task && (d?.type === "text" || d?.type === "paragraph")) {
          u.text = u.text.replace(this.rules.other.listReplaceTask, ""), d.raw = d.raw.replace(this.rules.other.listReplaceTask, ""), d.text = d.text.replace(this.rules.other.listReplaceTask, "");
          for (let g = this.lexer.inlineQueue.length - 1; g >= 0; g--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)) {
            this.lexer.inlineQueue[g].src = this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let k = this.rules.other.listTaskCheckbox.exec(u.raw);
          if (k) {
            let g = { type: "checkbox", raw: k[0] + " ", checked: k[0] !== "[ ]" };
            u.checked = g.checked, o.loose ? u.tokens[0] && ["paragraph", "text"].includes(u.tokens[0].type) && "tokens" in u.tokens[0] && u.tokens[0].tokens ? (u.tokens[0].raw = g.raw + u.tokens[0].raw, u.tokens[0].text = g.raw + u.tokens[0].text, u.tokens[0].tokens.unshift(g)) : u.tokens.unshift({ type: "paragraph", raw: g.raw, text: g.raw, tokens: [g] }) : u.tokens.unshift(g);
          }
        } else u.task && (u.task = false);
      }
      if (o.loose) for (let u of o.items) {
        u.loose = true;
        for (let d of u.tokens) d.type === "text" && (d.type = "paragraph");
      }
      return o;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) {
      let n = ke(t[0]);
      return { type: "html", block: true, raw: n, pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: n };
    }
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      if (!this.rules.other.startAngleBracket.test(t[2]) && fe(t[2], "()") !== -1) return;
      let n = Q(t[1]), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: L(t[0], `
`), href: s, title: i };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = ge(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], r = { type: "table", raw: L(t[0], `
`), header: [], align: [], rows: [] };
    if (n.length === s.length) {
      for (let o of s) this.rules.other.tableAlignRight.test(o) ? r.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? r.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? r.align.push("left") : r.align.push(null);
      for (let o = 0; o < n.length; o++) r.header.push({ text: n[o], tokens: this.lexer.inline(n[o]), header: true, align: r.align[o] });
      for (let o of i) r.rows.push(ge(o, r.header.length).map((a, p) => ({ text: a, tokens: this.lexer.inline(a), header: false, align: r.align[p] })));
      return r;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) {
      let n = t[1].trim();
      return { type: "heading", raw: L(t[0], `
`), depth: t[2].charAt(0) === "=" ? 1 : 2, text: n, tokens: this.lexer.inline(n) };
    }
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    if (this.lexer.state.linkParenPossible === false) return;
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[0].charAt(0) === "!" ? 2 : 1;
      if (!this.options.pedantic && ve(e, t[1], n, this.rules)) return;
      let s = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(s)) {
        if (!this.rules.other.endAngleBracket.test(s)) return;
        let a = L(s.slice(0, -1), "\\");
        if ((s.length - a.length) % 2 === 0) return;
      } else {
        let a = fe(t[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let c = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, c).trim(), t[3] = "";
        }
      }
      let i = L(t[0].slice(0, -1), "\\");
      if ((t[0].length - i.length) % 2 === 0) return;
      let r = t[2], o = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(r);
        a && (r = a[1], o = a[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(s) ? r = r.slice(1) : r = r.slice(1, -1)), qe(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let s = n[0].charAt(0) === "!" ? 2 : 1;
      if (!this.options.pedantic && ve(e, n[1], s, this.rules)) return;
      let i = t[Q(n[2] || n[1])];
      if (!i) {
        let r = n[0].charAt(0);
        return { type: "text", raw: r, text: r };
      }
      return qe(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || !s[1] && !s[2] && !s[3] && !s[4]) return;
    let i = s[0][0], r = n === i, o = t.length - e.length, a = o;
    for (; !this.options.pedantic && a > 0 && t[a - 1] === i; ) a--;
    let p = [...t.slice(Math.max(0, a - 2), a)].at(-1) ?? "", c = p === "*" || p === "_" || !!this.rules.inline.punctuation.exec(p);
    a < o && (n = p);
    let u = a < o ? c : n === "*" || n === "_" || !!this.rules.inline.punctuation.exec(n);
    if (s[4] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    let d = s[1] || s[3] || "";
    if (!d || !n || u) {
      let k = [...s[0]].length - 1, g, b, f = k, m = 0, S = o - a + k, R = !this.options.pedantic && !!p.trim() && (!!d || i === "*" && !c);
      if (i !== "*" && i !== "_") return;
      let A = i === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd, v = Be(this, t, i), U = t.length - e.length + k;
      if (v < U) return;
      t = t.slice(-1 * e.length + k);
      let ee = v - U;
      for (A.lastIndex = 0; (s = A.exec(t)) !== null && !(s.index > ee); ) {
        if (g = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !g) continue;
        if (b = [...g].length, s[3] || s[4]) {
          f += b;
          continue;
        } else if (s[5] || s[6] || R) {
          if (r && (s[5] || s[6])) break;
          if (S % 3 && !((S + b) % 3)) {
            m += b;
            continue;
          }
        }
        if (f -= b, f > 0) continue;
        b = Math.min(b, b + f + m);
        let te = [...s[0]][0].length, M = e.slice(0, k + s.index + te + b);
        if (Math.min(k, b) % 2) {
          let Z = M.slice(1, -1);
          return { type: "em", raw: M, text: Z, tokens: this.lexer.inlineTokens(Z) };
        }
        let ne = M.slice(2, -2);
        return { type: "strong", raw: M, text: ne, tokens: this.lexer.inlineTokens(ne) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return s && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e, t, n = "") {
    let s = this.rules.inline.delLDelim.exec(e);
    if (!s) return;
    if (!(s[1] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let r = [...s[0]].length - 1, o, a, p = r, c = this.rules.inline.delRDelim, u = De(this, t), d = t.length - e.length + r;
      if (u < d) return;
      t = t.slice(-1 * e.length + r);
      let k = u - d;
      for (c.lastIndex = 0; (s = c.exec(t)) !== null && !(s.index > k); ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o || (a = [...o].length, a !== r)) continue;
        if (s[3] || s[4]) {
          p += a;
          continue;
        }
        if (p -= a, p > 0) continue;
        a = Math.min(a, a + p);
        let g = [...s[0]][0].length, b = e.slice(0, r + s.index + g + a), f = b.slice(r, -r);
        return { type: "del", raw: b, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), { type: "link", raw: t[0], text: n, href: s, autolink: true, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, s;
      if (t[2] === "@") n = t[0], s = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (i !== t[0]);
        n = t[0], t[1] === "www." ? s = "http://" + t[0] : s = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: s, autolink: true, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: n ? t[0] : Ee(t[0]), escaped: n };
    }
  }
};
var O = class l {
  tokens;
  options;
  state;
  inlineQueue;
  tokenizer;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || y, this.options.tokenizer = this.options.tokenizer || new _(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, linkEmitted: false, linkParenPossible: true, top: true };
    let t = { other: T, block: V.normal, inline: N.normal };
    this.options.pedantic ? (t.block = V.pedantic, t.inline = N.pedantic) : this.options.gfm && (t.block = V.gfm, this.options.breaks ? t.inline = N.breaks : t.inline = N.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: V, inline: N };
  }
  static lex(e, t) {
    return new l(t).lex(e);
  }
  static lexInline(e, t) {
    return new l(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(T.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.state.inRawBlock = false, this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    this.tokenizer.lexer = this;
    let s = this.state.lastToken;
    this.options.pedantic && (e = e.replace(T.tabCharGlobal, "    ").replace(T.spaceLine, ""));
    let i = 1 / 0;
    for (; e; ) {
      if (e.length < i) i = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      this.state.lastToken = t.at(-1);
      let r;
      if (this.options.extensions?.block?.some((a) => (r = a.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let a = t.at(-1);
        r.raw.length === 1 && a !== void 0 ? a.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let a = t.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.at(-1).src = a.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let a = t.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.raw, this.inlineQueue.at(-1).src = a.text) : (this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }), t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let o = e;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, p = e.slice(1), c;
        this.options.extensions.startBlock.forEach((u) => {
          c = u.call({ lexer: this }, p), typeof c == "number" && c >= 0 && (a = Math.min(a, c));
        }), a < 1 / 0 && a >= 0 && (o = e.substring(0, a + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(o))) {
        let a = t.at(-1);
        n && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = o.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let a = t.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + r.raw, a.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = true, this.state.lastToken = s, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  linkInText(e) {
    if (!e.includes("[")) return false;
    let t = this.tokenizer.rules.inline.link;
    for (let n of e.matchAll(this.tokenizer.rules.inline.blockSkip)) if (t.test(n[0]) && e.charAt(n.index - 1) !== "!") return true;
    for (let n of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)) {
      let s = n[0], i = s.lastIndexOf("[");
      if (!(s.charAt(0) === "!" || !Object.hasOwn(this.tokens.links, Q(s.slice(i + 1, -1)))) && !(i > 1 && this.linkInText(s.slice(1, i - 1)))) return true;
    }
    return false;
  }
  inlineTokens(e, t = []) {
    this.tokenizer.lexer = this;
    let n = this.state.linkParenPossible;
    this.state.linkParenPossible = n && e.includes(")");
    try {
      return this.#e(e, t);
    } finally {
      this.state.linkParenPossible = n;
    }
  }
  #e(e, t) {
    let n = e.includes("*") || e.includes("_") || e.includes("~") || this.options.hooks?.emStrongMask || this.tokenizer.emStrong !== _.prototype.emStrong || this.tokenizer.del !== _.prototype.del ? this.#r(e) : e;
    ze(this.tokenizer, n);
    try {
      return this.#t(e, n, t);
    } finally {
      Me(this.tokenizer);
    }
  }
  #t(e, t, n) {
    let s = false, i = "", r = 1 / 0;
    for (; e; ) {
      if (e.length < r) r = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (i = ""), s = false;
      let o;
      if (this.options.extensions?.inline?.some((p) => (o = p.call({ lexer: this }, e, n)) ? (e = e.substring(o.raw.length), n.push(o), true) : false)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let p = n.at(-1);
        o.type === "text" && p?.type === "text" ? (p.raw += o.raw, p.text += o.text) : n.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, t, i)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e, t, i)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), n.push(o);
        continue;
      }
      let a = e;
      if (this.options.extensions?.startInline) {
        let p = 1 / 0, c = e.slice(1), u;
        this.options.extensions.startInline.forEach((d) => {
          u = d.call({ lexer: this }, c), typeof u == "number" && u >= 0 && (p = Math.min(p, u));
        }), p < 1 / 0 && p >= 0 && (a = e.substring(0, p + 1));
      }
      if (o = this.tokenizer.inlineText(a)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (i = o.raw.slice(-1)), s = true;
        let p = n.at(-1);
        p?.type === "text" ? (p.raw += o.raw, p.text += o.text) : n.push(o);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return n;
  }
  #n(e) {
    let { blockSkip: t, tag: n, autolink: s } = this.tokenizer.rules.inline, i = "", r = 0, o;
    for (t.lastIndex = 0; o = t.exec(e); ) {
      let a = o.index + (o[2] ? o[2].length : 0), p = o.index + o[0].length;
      if (e.charAt(a) === "<") {
        let c = e.slice(a), u = n.exec(c) || s.exec(c);
        if (!u) {
          t.lastIndex = a + 1;
          continue;
        }
        p = a + u[0].length, t.lastIndex = p;
      }
      i += e.slice(r, a) + "[" + "a".repeat(p - a - 2) + "]", r = p;
    }
    return i + e.slice(r);
  }
  #r(e) {
    let t = e;
    if (this.tokens.links && e.includes("[")) {
      let n = this.tokenizer.rules.inline.reflinkSearch, s = (i) => {
        let r = i.lastIndexOf("[");
        if (!Object.hasOwn(this.tokens.links, Q(i.slice(r + 1, -1)))) return i;
        if (r > 1 && i.charAt(0) !== "!") {
          let o = i.slice(1, r - 1);
          if (this.linkInText(o)) return "[" + o.replace(n, s) + "][" + "a".repeat(i.length - r - 2) + "]";
        }
        return "[" + "a".repeat(i.length - 2) + "]";
      };
      t = t.replace(n, s);
    }
    return t = t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode, (n, s, i) => i ? "+".repeat(n.length) : s ? s + n.slice(s.length, -s.length).replace(/`/g, "+") + s : n), t = this.#n(t), t = this.options.hooks?.emStrongMask?.call({ lexer: this }, t) ?? t, t;
  }
  infiniteLoopError(e) {
    let t = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(t);
    else throw new Error(t);
  }
};
var C = class {
  options;
  parser;
  constructor(e) {
    this.options = e || y;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let s = (t || "").match(T.notSpaceStart)?.[0], i = e ? e.replace(T.endingNewline, "") + `
` : "";
    return s ? '<pre><code class="language-' + P(s) + '">' + (n ? i : P(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : P(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, s = "";
    for (let o = 0; o < e.items.length; o++) {
      let a = e.items[o];
      s += this.listitem(a);
    }
    let i = t ? "ol" : "ul", r = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + r + `>
` + s + "</" + i + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
    t += this.tablerow({ text: n });
    let s = "";
    for (let i = 0; i < e.rows.length; i++) {
      let r = e.rows[i];
      n = "";
      for (let o = 0; o < r.length; o++) n += this.tablecell(r[o]);
      s += this.tablerow({ text: n });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${P(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, text: n, tokens: s, autolink: i }) {
    let r = i ? P(n, true) : this.parser.parseInline(s), o = de(e);
    if (o === null) return r;
    e = P(o, i);
    let a = '<a href="' + e + '"';
    return t && (a += ' title="' + P(t) + '"'), a += ">" + r + "</a>", a;
  }
  image({ href: e, title: t, text: n, tokens: s }) {
    s && (n = this.parser.parseInline(s, this.parser.textRenderer));
    let i = de(e);
    if (i === null) return P(n);
    e = i;
    let r = `<img src="${P(e)}" alt="${P(n)}"`;
    return t && (r += ` title="${P(t)}"`), r += ">", r;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : P(e.text);
  }
};
var E = class {
  parser;
  strong({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  em({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  image({ text: e, tokens: t }) {
    return t ? this.parser.parseInline(t, this) : e;
  }
  br() {
    return `
`;
  }
  checkbox({ raw: e }) {
    return e;
  }
};
var w = class l2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || y, this.options.renderer = this.options.renderer || new C(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new E(), this.textRenderer.parser = this;
  }
  static parse(e, t) {
    return new l2(t).parse(e);
  }
  static parseInline(e, t) {
    return new l2(t).parseInline(e);
  }
  parse(e) {
    this.renderer.parser = this;
    let t = "";
    for (let n = 0; n < e.length; n++) {
      let s = e[n];
      if (this.options.extensions?.renderers?.[s.type]) {
        let r = s, o = this.options.extensions.renderers[r.type].call({ parser: this }, r);
        if (o !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "checkbox", "html", "def", "paragraph", "text"].includes(r.type)) {
          t += o === false ? "" : o ?? "";
          continue;
        }
      }
      let i = s;
      switch (i.type) {
        case "space": {
          t += this.renderer.space(i);
          break;
        }
        case "hr": {
          t += this.renderer.hr(i);
          break;
        }
        case "heading": {
          t += this.renderer.heading(i);
          break;
        }
        case "code": {
          t += this.renderer.code(i);
          break;
        }
        case "table": {
          t += this.renderer.table(i);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(i);
          break;
        }
        case "list": {
          t += this.renderer.list(i);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(i);
          break;
        }
        case "html": {
          t += this.renderer.html(i);
          break;
        }
        case "def": {
          t += this.renderer.def(i);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(i);
          break;
        }
        case "text": {
          t += this.renderer.text(i);
          break;
        }
        default: {
          let r = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent) return console.error(r), "";
          throw new Error(r);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    this.renderer.parser = this;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== false || !["escape", "html", "link", "image", "checkbox", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += o === false ? "" : o ?? "";
          continue;
        }
      }
      let r = i;
      switch (r.type) {
        case "escape": {
          n += t.text(r);
          break;
        }
        case "html": {
          n += t.html(r);
          break;
        }
        case "link": {
          n += t.link(r);
          break;
        }
        case "image": {
          n += t.image(r);
          break;
        }
        case "checkbox": {
          n += t.checkbox(r);
          break;
        }
        case "strong": {
          n += t.strong(r);
          break;
        }
        case "em": {
          n += t.em(r);
          break;
        }
        case "codespan": {
          n += t.codespan(r);
          break;
        }
        case "br": {
          n += t.br(r);
          break;
        }
        case "del": {
          n += t.del(r);
          break;
        }
        case "text": {
          n += t.text(r);
          break;
        }
        default: {
          let o = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
};
var I = class {
  options;
  block;
  constructor(e) {
    this.options = e || y;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer(e = this.block) {
    return e ? O.lex : O.lexInline;
  }
  provideParser(e = this.block) {
    return e ? w.parse : w.parseInline;
  }
};
function z(l3, e) {
  if (Array.isArray(e)) for (let t = 0; t < e.length; t++) l3.push(e[t]);
  else l3.push(e);
}
var Y = class {
  defaults = j();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = w;
  Renderer = C;
  TextRenderer = E;
  Lexer = O;
  Tokenizer = _;
  Hooks = I;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let s of e) switch (z(n, t.call(this, s)), s.type) {
      case "table": {
        let i = s;
        for (let r of i.header) z(n, this.walkTokens(r.tokens, t));
        for (let r of i.rows) for (let o of r) z(n, this.walkTokens(o.tokens, t));
        break;
      }
      case "list": {
        let i = s;
        z(n, this.walkTokens(i.items, t));
        break;
      }
      default: {
        let i = s;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((r) => {
          let o = i[r].flat(1 / 0);
          z(n, this.walkTokens(o, t));
        }) : i.tokens && z(n, this.walkTokens(i.tokens, t));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: /* @__PURE__ */ Object.create(null), childTokens: /* @__PURE__ */ Object.create(null) };
    return e.forEach((n) => {
      let s = { ...n };
      if (s.async = this.defaults.async || s.async || false, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let r = t.renderers[i.name];
          r ? t.renderers[i.name] = function(...o) {
            let a = i.renderer.apply(this, o);
            return a === false && (a = r.apply(this, o)), a;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let r = t[i.level];
          r ? r.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), s.extensions = t), n.renderer) {
        let i = this.defaults.renderer || new C(this.defaults);
        for (let r in n.renderer) {
          if (!(r in i)) throw new Error(`renderer '${r}' does not exist`);
          if (["options", "parser"].includes(r)) continue;
          let o = r, a = n.renderer[o], p = i[o];
          i[o] = (...c) => {
            let u = a.apply(i, c);
            return u === false && (u = p.apply(i, c)), u === false ? "" : u ?? "";
          };
        }
        s.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new _(this.defaults);
        for (let r in n.tokenizer) {
          if (!(r in i)) throw new Error(`tokenizer '${r}' does not exist`);
          if (["options", "rules", "lexer"].includes(r)) continue;
          let o = r, a = n.tokenizer[o], p = i[o];
          i[o] = (...c) => {
            let u = a.apply(i, c);
            return u === false && (u = p.apply(i, c)), u;
          };
        }
        s.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new I();
        for (let r in n.hooks) {
          if (!(r in i)) throw new Error(`hook '${r}' does not exist`);
          if (["options", "block"].includes(r)) continue;
          let o = r, a = n.hooks[o], p = i[o];
          I.passThroughHooks.has(r) ? i[o] = (c) => {
            if (i.options.async && I.passThroughHooksRespectAsync.has(r)) return (async () => {
              let d = await a.call(i, c);
              return p.call(i, d);
            })();
            let u = a.call(i, c);
            return p.call(i, u);
          } : i[o] = (...c) => {
            if (i.options.async) return (async () => {
              let d = await a.apply(i, c);
              return d === false && (d = await p.apply(i, c)), d;
            })();
            let u = a.apply(i, c);
            return u === false && (u = p.apply(i, c)), u;
          };
        }
        s.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, r = n.walkTokens;
        s.walkTokens = function(o) {
          let a = [];
          return z(a, r.call(this, o)), i && z(a, i.call(this, o)), a;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return O.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return w.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, s) => {
      let i = { ...s }, r = { ...this.defaults, ...i }, o = this.onError(!!r.silent, !!r.async);
      if (this.defaults.async === true && i.async === false) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (r.hooks && (r.hooks.options = r, r.hooks.block = e), r.async) return (async () => {
        let a = r.hooks ? await r.hooks.preprocess(n) : n, c = await (r.hooks ? await r.hooks.provideLexer(e) : e ? O.lex : O.lexInline)(a, r), u = r.hooks ? await r.hooks.processAllTokens(c) : c;
        r.walkTokens && await Promise.all(this.walkTokens(u, r.walkTokens));
        let k = await (r.hooks ? await r.hooks.provideParser(e) : e ? w.parse : w.parseInline)(u, r);
        return r.hooks ? await r.hooks.postprocess(k) : k;
      })().catch(o);
      try {
        r.hooks && (n = r.hooks.preprocess(n));
        let p = (r.hooks ? r.hooks.provideLexer(e) : e ? O.lex : O.lexInline)(n, r);
        r.hooks && (p = r.hooks.processAllTokens(p)), r.walkTokens && this.walkTokens(p, r.walkTokens);
        let u = (r.hooks ? r.hooks.provideParser(e) : e ? w.parse : w.parseInline)(p, r);
        return r.hooks && (u = r.hooks.postprocess(u)), u;
      } catch (a) {
        return o(a);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let s = "<p>An error occurred:</p><pre>" + P(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var q = new Y();
function x(l3, e) {
  return q.parse(l3, e);
}
x.options = x.setOptions = function(l3) {
  return q.setOptions(l3), x.defaults = q.defaults, ie(x.defaults), x;
};
x.getDefaults = j;
x.defaults = y;
function vt(...l3) {
  return q.use(...l3), x.defaults = q.defaults, ie(x.defaults), x;
}
x.use = vt;
x.walkTokens = function(l3, e) {
  return q.walkTokens(l3, e);
};
x.parseInline = q.parseInline;
x.Parser = w;
x.parser = w.parse;
x.Renderer = C;
x.TextRenderer = E;
x.Lexer = O;
x.lexer = O.lex;
x.Tokenizer = _;
x.Hooks = I;
x.parse = x;
var Ln = x.options;
var Cn = x.setOptions;
var In = x.walkTokens;
var An = x.parseInline;
var zn = w.parse;
var Mn = O.lex;

// node_modules/.pnpm/dompurify@3.4.17/node_modules/dompurify/dist/purify.es.mjs
/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */
function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l3) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l3) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l3); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function AsyncGenerator(e) {
  var t, n;
  function resume(t2, n2) {
    try {
      var r = e[t2](n2), o = r.value, u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(function(n3) {
        if (u) {
          var i = "return" === t2 && o.k ? t2 : "next";
          if (!o.k || n3.done) return resume(i, n3);
          n3 = e[i](n3).value;
        }
        settle(!!r.done, n3);
      }, function(e2) {
        resume("throw", e2);
      });
    } catch (e2) {
      settle(2, e2);
    }
  }
  function settle(e2, r) {
    2 === e2 ? t.reject(r) : t.resolve({
      value: r,
      done: e2
    }), (t = t.next) ? resume(t.key, t.arg) : n = null;
  }
  this._invoke = function(e2, r) {
    return new Promise(function(o, u) {
      var i = {
        key: e2,
        arg: r,
        resolve: o,
        reject: u,
        next: null
      };
      n ? n = n.next = i : (t = n = i, resume(e2, r));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
  return this;
}, AsyncGenerator.prototype.next = function(e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function(e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function(e) {
  return this._invoke("return", e);
};
var entries = Object.entries;
var setPrototypeOf = Object.setPrototypeOf;
var isFrozen = Object.isFrozen;
var getPrototypeOf = Object.getPrototypeOf;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze;
var seal = Object.seal;
var create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect;
var apply = _ref.apply;
var construct = _ref.construct;
if (!freeze) freeze = function freeze2(x2) {
  return x2;
};
if (!seal) seal = function seal2(x2) {
  return x2;
};
if (!apply) apply = function apply2(func, thisArg) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
  return func.apply(thisArg, args);
};
if (!construct) construct = function construct2(Func) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
  return new Func(...args);
};
var arrayForEach = unapply(Array.prototype.forEach);
Array.prototype.indexOf;
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var arraySlice = unapply(Array.prototype.slice);
var arraySplice = unapply(Array.prototype.splice);
var arrayIsArray = Array.isArray;
var setCreate = unconstruct(Set);
var setAdd = unapply(Set.prototype.add);
var setHas = unapply(Set.prototype.has);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var numberToString = unapply(Number.prototype.toString);
var booleanToString = unapply(Boolean.prototype.toString);
var bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
var symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var objectToString = unapply(Object.prototype.toString);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
    return apply(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
    return construct(Func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) setPrototypeOf(set, null);
  if (!arrayIsArray(array)) return set;
  let l3 = array.length;
  while (l3--) {
    let element = array[l3];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) array[l3] = lcElement;
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const _ref2 of entries(object)) {
    var _ref3 = _slicedToArray(_ref2, 2);
    const property = _ref3[0];
    const value = _ref3[1];
    if (objectHasOwnProperty(object, property)) {
      if (arrayIsArray(value)) newObject[property] = cleanArray(value);
      else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
      else newObject[property] = value;
    }
  }
  return newObject;
}
function stringifyValue(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return numberToString(value);
    case "boolean":
      return booleanToString(value);
    case "bigint":
      return bigintToString ? bigintToString(value) : "0";
    case "symbol":
      return symbolToString ? symbolToString(value) : "Symbol()";
    case "undefined":
      return objectToString(value);
    case "function":
    case "object": {
      if (value === null) return objectToString(value);
      const valueAsRecord = value;
      const valueToString = lookupGetter(valueAsRecord, "toString");
      if (typeof valueToString === "function") {
        const stringified = valueToString(valueAsRecord);
        return typeof stringified === "string" ? stringified : objectToString(stringified);
      }
      return objectToString(value);
    }
    default:
      return objectToString(value);
  }
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) return unapply(desc.get);
      if (typeof desc.value === "function") return unapply(desc.value);
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
function lookupAccessor(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) return desc.get ? unapply(desc.get) : null;
    object = getPrototypeOf(object);
  }
  return null;
}
function isRegex(value) {
  try {
    regExpTest(value, "");
    return true;
  } catch (_unused) {
    return false;
  }
}
var html$1 = freeze([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]);
var svg$1 = freeze([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]);
var svgFilters = freeze([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]);
var svgDisallowed = freeze([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]);
var mathMl$1 = freeze([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]);
var mathMlDisallowed = freeze([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]);
var text = freeze(["#text"]);
var html = freeze([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]);
var svg = freeze([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]);
var mathMl = freeze([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]);
var xml = freeze([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]);
var MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
var ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
var TMPLIT_EXPR = seal(/\${[\w\W]*/g);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
var COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
var FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
var SELF_CLOSING_TAG = seal(/\/>/i);
var NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
};
var LITERAL_TEXT_ELEMENTS = freeze(addToSet({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]));
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
var _resolveSetOption = function _resolveSetOption2(cfg, key, fallback, options) {
  return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
};
var _resolveObjectOption = function _resolveObjectOption2(cfg, key, makeFallback) {
  const value = objectHasOwnProperty(cfg, key) ? cfg[key] : void 0;
  return value && typeof value === "object" ? clone(value) : makeFallback();
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.4.17";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let document2 = window2.document;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  window2.DocumentFragment;
  const HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter;
  window2.NamedNodeMap === void 0 && (window2.NamedNodeMap || window2.MozNamedAttrMap);
  window2.HTMLFormElement;
  const DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const removeAttributeNode = lookupGetter(ElementPrototype, "removeAttributeNode");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
  const getAttributes = lookupGetter(ElementPrototype, "attributes");
  const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
  const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
  const getOwnerDocument = Node && Node.prototype ? lookupGetter(Node.prototype, "ownerDocument") : null;
  const _readNodeType = function _readNodeType2(node) {
    return getNodeType ? getNodeType(node) : node.nodeType;
  };
  const _readNodeName = function _readNodeName2(node) {
    return getNodeName ? getNodeName(node) : node.nodeName;
  };
  const getNamespaceURI = lookupAccessor(ElementPrototype, "namespaceURI");
  const _readNamespaceURI = function _readNamespaceURI2(element) {
    return getNamespaceURI ? getNamespaceURI(element) : element.namespaceURI;
  };
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) document2 = template.content.ownerDocument;
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  let defaultTrustedTypesPolicy;
  let defaultTrustedTypesPolicyResolved = false;
  let IN_TRUSTED_TYPES_POLICY = 0;
  const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy2() {
    if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  };
  const _createTrustedHTML = function _createTrustedHTML2(html2) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createHTML(html2);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _createTrustedScriptURL = function _createTrustedScriptURL2(scriptUrl) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createScriptURL(scriptUrl);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy2() {
    if (!defaultTrustedTypesPolicyResolved) {
      defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      defaultTrustedTypesPolicyResolved = true;
    }
    return defaultTrustedTypesPolicy;
  };
  const _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  const importNode = originalDocument.importNode;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
  let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [
    ...html$1,
    ...svg$1,
    ...svgFilters,
    ...mathMl$1,
    ...text
  ]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [
    ...html,
    ...svg,
    ...mathMl,
    ...xml
  ]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let SET_CONFIG_ALLOWED_TAGS = null;
  let SET_CONFIG_ALLOWED_ATTR = null;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let IN_PLACE_VISITED = null;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
    MATHML_NAMESPACE,
    SVG_NAMESPACE,
    HTML_NAMESPACE
  ], stringToString);
  const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
  const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) return;
    if (!cfg || typeof cfg !== "object") cfg = {};
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
    ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
    ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
    URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
      transform: transformCaseFunc,
      base: DEFAULT_URI_SAFE_ATTRIBUTES
    });
    DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
      transform: transformCaseFunc,
      base: DEFAULT_DATA_URI_TAGS
    });
    FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
    FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), { transform: transformCaseFunc });
    FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), { transform: transformCaseFunc });
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
    NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = _resolveObjectOption(cfg, "MATHML_TEXT_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS));
    HTML_INTEGRATION_POINTS = _resolveObjectOption(cfg, "HTML_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS));
    const customElementHandling = _resolveObjectOption(cfg, "CUSTOM_ELEMENT_HANDLING", () => create(null));
    CUSTOM_ELEMENT_HANDLING = create(null);
    if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
    if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
    if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
    seal(CUSTOM_ELEMENT_HANDLING);
    if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
    if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = create(null);
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    EXTRA_ELEMENT_HANDLING.tagCheck = null;
    EXTRA_ELEMENT_HANDLING.attributeCheck = null;
    if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
      if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      else if (arrayIsArray(cfg.ADD_TAGS)) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
      if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      else if (arrayIsArray(cfg.ADD_ATTR)) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
    if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
      "html",
      "head",
      "body"
    ]);
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const previousTrustedTypesPolicy = trustedTypesPolicy;
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      try {
        emptyHTML = _createTrustedHTML("");
      } catch (error) {
        trustedTypesPolicy = previousTrustedTypesPolicy;
        throw error;
      }
    } else if (cfg.TRUSTED_TYPES_POLICY === null) {
      trustedTypesPolicy = void 0;
      emptyHTML = "";
    } else {
      if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
      if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
    }
    if (freeze) freeze(cfg);
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [
    ...svg$1,
    ...svgFilters,
    ...svgDisallowed
  ]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkSvgNamespace = function _checkSvgNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
    if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
    return Boolean(ALL_SVG_TAGS[tagName]);
  };
  const _checkMathMlNamespace = function _checkMathMlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
    if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
    return Boolean(ALL_MATHML_TAGS[tagName]);
  };
  const _checkHtmlNamespace = function _checkHtmlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
    if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
    return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
  };
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    const elementNamespace = _readNamespaceURI(element);
    const tagName = stringToLowerCase(_readNodeName(element));
    const parentNode = getParentNode(element);
    let parent;
    let parentTagName;
    if (parentNode && _readNodeType(parentNode) === NODE_TYPE.element) {
      parent = { namespaceURI: _readNamespaceURI(parentNode) };
      parentTagName = stringToLowerCase(_readNodeName(parentNode));
    } else {
      parent = { namespaceURI: NAMESPACE };
      parentTagName = "template";
    }
    if (!ALLOWED_NAMESPACES[elementNamespace]) return false;
    if (elementNamespace === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parent, parentTagName);
    if (elementNamespace === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parent, parentTagName);
    if (elementNamespace === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parent, parentTagName);
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[elementNamespace]) return true;
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, { element: node });
    try {
      getParentNode(node).removeChild(node);
    } catch (_2) {
      remove(node);
      if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  };
  const _stripAttributeNode = function _stripAttributeNode2(element, attribute, name) {
    try {
      removeAttributeNode(element, attribute);
    } catch (_2) {
      try {
        element.removeAttribute(name);
      } catch (_3) {
      }
    }
  };
  const _neutralizeRoot = function _neutralizeRoot2(root) {
    _neutralizeSubtree(root);
    const childNodes = getChildNodes(root);
    if (childNodes) arrayForEach(arraySlice(childNodes), (child) => {
      try {
        remove(child);
      } catch (_2) {
      }
    });
    const attributes = _readNodeType(root) === NODE_TYPE.element ? getAttributes(root) : null;
    if (attributes) for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name === "string") _stripAttributeNode(root, attribute, name);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element, attr) {
    if (!attr) try {
      attr = element.getAttributeNode(name);
    } catch (_2) {
      attr = null;
    }
    arrayPush(DOMPurify.removed, {
      attribute: attr || null,
      from: element
    });
    try {
      if (attr) removeAttributeNode(element, attr);
      else element.removeAttribute(name);
    } catch (_2) {
      try {
        element.removeAttribute(name);
      } catch (_3) {
      }
    }
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
        _forceRemove(element);
      } catch (_2) {
      }
      else try {
        element.setAttribute(name, "");
      } catch (_2) {
      }
    }
  };
  const _stripDisallowedAttributes = function _stripDisallowedAttributes2(element) {
    const attributes = getAttributes(element);
    if (!attributes) return;
    for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) continue;
      _stripAttributeNode(element, attribute, name);
    }
  };
  const _walkTree = function _walkTree2(root, visit) {
    let intoShadow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (visit(node) === false) continue;
      if (intoShadow && _readNodeType(node) === NODE_TYPE.element) {
        const shadowRoot = getShadowRoot(node);
        if (_isDocumentFragment(shadowRoot)) stack.push(shadowRoot);
      }
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
    }
  };
  const _neutralizeSubtree = function _neutralizeSubtree2(root) {
    _walkTree(root, (node) => {
      if (_readNodeType(node) === NODE_TYPE.element) _stripDisallowedAttributes(node);
    });
  };
  const _collectLiveNodes = function _collectLiveNodes2(root) {
    const nodes = [];
    _walkTree(root, (node) => {
      nodes.push(node);
    }, true);
    return nodes;
  };
  const _neutralizeEscapedElements = function _neutralizeEscapedElements2(root, before) {
    const reachable = setCreate();
    arrayForEach(_collectLiveNodes(root), (node) => {
      if (_readNodeType(node) === NODE_TYPE.element) setAdd(reachable, node);
    });
    arrayForEach(before, (node) => {
      if (_readNodeType(node) === NODE_TYPE.element && !setHas(reachable, node)) _stripDisallowedAttributes(node);
    });
  };
  const _neutralizeDiscarded = function _neutralizeDiscarded2(root, before) {
    let rootRemoved = false;
    arrayForEach(DOMPurify.removed, (entry) => {
      if (entry.element) {
        rootRemoved = rootRemoved || entry.element === root;
        _neutralizeSubtree(entry.element);
      }
    });
    _neutralizeEscapedElements(root, before);
    return rootRemoved;
  };
  const MAX_UNVISITED_ROUNDS = 8;
  const _sanitizeUnvisitedNodes = function _sanitizeUnvisitedNodes2(root, before) {
    const visited = IN_PLACE_VISITED;
    let original = null;
    const getOriginal = () => {
      if (!original) {
        original = setCreate();
        arrayForEach(before, (beforeNode) => {
          setAdd(original, beforeNode);
        });
      }
      return original;
    };
    for (let round = 0; ; round++) {
      const live = _collectLiveNodes(root);
      const containers = [root];
      let pending = false;
      arrayForEach(live, (node) => {
        if (_readNodeType(node) === NODE_TYPE.documentFragment) arrayPush(containers, node);
        else if (!pending && !setHas(visited, node)) pending = setHas(getOriginal(), node);
      });
      if (!pending) return;
      if (round >= MAX_UNVISITED_ROUNDS) throw typeErrorCreate("the tree kept changing during in-place sanitization; refusing to return it");
      arrayForEach(containers, (container, index) => {
        _sanitizeUnvisitedIn(container, index > 0, root, getOriginal());
      });
    }
  };
  const _sanitizeUnvisitedIn = function _sanitizeUnvisitedIn2(container, inShadow, root, original) {
    const iterator = _createNodeIterator(container);
    let node;
    while (node = iterator.nextNode()) {
      if (!setHas(original, node) || setHas(IN_PLACE_VISITED, node)) continue;
      if (inShadow) _executeHooks(hooks.uponSanitizeShadowNode, node, null);
      _sanitizeElements(node, root);
      _sanitizeAttributes(node, root);
      if (_isDocumentFragment(node.content)) _sanitizeShadowDOM2(node.content);
    }
  };
  const _markVisited = function _markVisited2(node) {
    if (IN_PLACE_VISITED) setAdd(IN_PLACE_VISITED, node);
  };
  const _isPatchLinkageAttribute = function _isPatchLinkageAttribute2(lcName, lcTag) {
    if (!SAFE_FOR_XML) return false;
    if (lcName === "patchsrc") return true;
    return lcName === "for" && lcTag !== "label" && lcTag !== "output";
  };
  const _neutralizePatchLinkage = function _neutralizePatchLinkage2(root) {
    if (!SAFE_FOR_XML) return;
    _walkTree(root, (node) => {
      const nodeType = _readNodeType(node);
      if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
        try {
          remove(node);
        } catch (_2) {
        }
        return false;
      }
      if (nodeType === NODE_TYPE.element) {
        const element = node;
        const lcTag = transformCaseFunc(_readNodeName(node));
        try {
          if (element.hasAttribute && element.hasAttribute("patchsrc")) element.removeAttribute("patchsrc");
          if (element.hasAttribute && element.hasAttribute("for") && _isPatchLinkageAttribute("for", lcTag)) element.removeAttribute("for");
        } catch (_2) {
        }
      }
      return true;
    });
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
    else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) try {
      doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
    } catch (_2) {
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    const doc = getOwnerDocument ? getOwnerDocument(root) : root.ownerDocument;
    return createNodeIterator.call(doc || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
  };
  const _stripTemplateExpressions = function _stripTemplateExpressions2(value) {
    value = stringReplace(value, MUSTACHE_EXPR$1, " ");
    value = stringReplace(value, ERB_EXPR$1, " ");
    value = stringReplace(value, TMPLIT_EXPR$1, " ");
    return value;
  };
  const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
    var _node$querySelectorAl;
    _scrubOwnCharacterData(node);
    const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
    if (templates) arrayForEach(templates, (tmpl) => {
      if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
    });
  };
  const _scrubOwnCharacterData = function _scrubOwnCharacterData2(node) {
    node.normalize();
    const doc = getOwnerDocument ? getOwnerDocument(node) : node.ownerDocument;
    const walker = createNodeIterator.call(doc || node, node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION, null);
    let currentNode = walker.nextNode();
    while (currentNode) {
      currentNode.data = _stripTemplateExpressions(currentNode.data);
      currentNode = walker.nextNode();
    }
  };
  const _isClobbered = function _isClobbered2(element) {
    const realTagName = getNodeName ? getNodeName(element) : null;
    if (typeof realTagName !== "string") return false;
    if (transformCaseFunc(realTagName) !== "form") return false;
    return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.removeAttributeNode !== "function" || typeof element.getAttributeNode !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
  };
  const _isDocumentFragment = function _isDocumentFragment2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) return false;
    try {
      return getNodeType(value) === NODE_TYPE.documentFragment;
    } catch (_2) {
      return false;
    }
  };
  const _isNode = function _isNode2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) return false;
    try {
      return typeof getNodeType(value) === "number";
    } catch (_2) {
      return false;
    }
  };
  function _executeHooks(hooks2, currentNode, data) {
    if (hooks2.length === 0) return;
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _isUnsafeNode = function _isUnsafeNode2(currentNode, tagName) {
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
    if (SAFE_FOR_XML && LITERAL_TEXT_ELEMENTS[tagName] && _readNodeType(currentNode) === NODE_TYPE.element && _readNamespaceURI(currentNode) === HTML_NAMESPACE && (_isNode(currentNode.firstElementChild) || typeof currentNode.textContent === "string" && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent))) return true;
    if (currentNode.nodeType === NODE_TYPE.processingInstruction) return true;
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
    return false;
  };
  const _matchesNameCheck = function _matchesNameCheck2(check, name) {
    if (check instanceof RegExp) return regExpTest(check, name);
    if (check instanceof Function) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
      return Boolean(check(name, ...args));
    }
    return false;
  };
  const _sanitizeDisallowedNode = function _sanitizeDisallowedNode2(currentNode, tagName, root) {
    if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
    if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && !FORBID_CONTENTS[stringToLowerCase(tagName)]) {
      const parentNode = getParentNode(currentNode);
      const childNodes = getChildNodes(currentNode);
      if (childNodes && parentNode) {
        const childCount = childNodes.length;
        for (let i = childCount - 1; i >= 0; --i) {
          const hoisted = currentNode === root ? cloneNode(childNodes[i], true) : childNodes[i];
          parentNode.insertBefore(hoisted, getNextSibling(currentNode));
        }
      }
    }
    _forceRemove(currentNode);
    return true;
  };
  const _forkSharedAllowlist = function _forkSharedAllowlist2(hookList, set, defaultSet, setConfigSet) {
    if (hookList.length === 0) return set;
    return set === defaultSet || set === setConfigSet ? clone(set) : set;
  };
  const _handleHookDetachedNode = function _handleHookDetachedNode2(currentNode, root) {
    if (currentNode === root || getParentNode(currentNode) !== null) return false;
    if (IN_PLACE) _neutralizeSubtree(currentNode);
    return true;
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode, root) {
    _markVisited(currentNode);
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_handleHookDetachedNode(currentNode, root)) return true;
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(_readNodeName(currentNode));
    ALLOWED_TAGS = _forkSharedAllowlist(hooks.uponSanitizeElement, ALLOWED_TAGS, DEFAULT_ALLOWED_TAGS, SET_CONFIG_ALLOWED_TAGS);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (_handleHookDetachedNode(currentNode, root)) return true;
    if (_isUnsafeNode(currentNode, tagName)) {
      _forceRemove(currentNode);
      return true;
    }
    if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
      const removed = _sanitizeDisallowedNode(currentNode, tagName, root);
      if (removed === false) {
        _executeHooks(hooks.afterSanitizeElements, currentNode, null);
        if (_handleHookDetachedNode(currentNode, root)) return true;
      }
      return removed;
    }
    if (_readNodeType(currentNode) === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      const content = _stripTemplateExpressions(currentNode.textContent);
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return _handleHookDetachedNode(currentNode, root);
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (FORBID_ATTR[lcName]) return false;
    if (_isPatchLinkageAttribute(lcName, lcTag)) return false;
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) return false;
    const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
    if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) return true;
    if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) return true;
    if (!nameIsPermitted) return _isBasicCustomElement(lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName, lcTag) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value);
    if (URI_SAFE_ATTRIBUTES[lcName]) return true;
    if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
    if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) return true;
    if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
    return !value;
  };
  const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]);
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
  };
  const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute2(lcTag, lcName, namespaceURI, value) {
    if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
      case "TrustedHTML":
        return _createTrustedHTML(value);
      case "TrustedScriptURL":
        return _createTrustedScriptURL(value);
    }
    return value;
  };
  const _setAttributeValue = function _setAttributeValue2(currentNode, name, namespaceURI, value) {
    try {
      if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
      else currentNode.setAttribute(name, value);
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return false;
      }
      return true;
    } catch (_2) {
      _removeAttribute(name, currentNode);
      return false;
    }
  };
  const _isUnsafeAttributeValue = function _isUnsafeAttributeValue2(name, value) {
    if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) return true;
    return stringToLowerCase(name) === "attributename" && stringMatch(value, "href") !== null;
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode, root) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    if (_handleHookDetachedNode(currentNode, root)) return;
    const attributes = currentNode.attributes;
    if (!attributes || _isClobbered(currentNode)) return;
    ALLOWED_ATTR = _forkSharedAllowlist(hooks.uponSanitizeAttribute, ALLOWED_ATTR, DEFAULT_ALLOWED_ATTR, SET_CONFIG_ALLOWED_ATTR);
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l3 = attributes.length;
    const lcTag = transformCaseFunc(currentNode.nodeName);
    while (l3--) {
      const attr = attributes[l3];
      const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      let recreatedNamedProp = false;
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
        _removeAttribute(name, currentNode, attr);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
        recreatedNamedProp = true;
      }
      if (_isUnsafeAttributeValue(name, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (hookEvent.forceKeepAttr) continue;
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
      if (value !== initValue) {
        if (_setAttributeValue(currentNode, name, namespaceURI, value) && recreatedNamedProp) arrayPop(DOMPurify.removed);
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    _handleHookDetachedNode(currentNode, root);
  };
  const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode, fragment);
      _sanitizeAttributes(shadowNode, fragment);
      if (_isDocumentFragment(shadowNode.content)) _sanitizeShadowDOM2(shadowNode.content);
      if (_readNodeType(shadowNode) === NODE_TYPE.element) {
        const innerSr = getShadowRoot(shadowNode);
        if (_isDocumentFragment(innerSr)) {
          _sanitizeAttachedShadowRoots(innerSr);
          _sanitizeShadowDOM2(innerSr);
        }
      }
    }
    if (SAFE_FOR_TEMPLATES) _scrubOwnCharacterData(fragment);
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots2(root) {
    const stack = [{
      node: root,
      shadow: null
    }];
    while (stack.length > 0) {
      const item = stack.pop();
      if (item.shadow) {
        _sanitizeShadowDOM2(item.shadow);
        continue;
      }
      const node = item.node;
      const isElement = _readNodeType(node) === NODE_TYPE.element;
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
        node: childNodes[i],
        shadow: null
      });
      if (isElement) {
        const rootName = getNodeName ? getNodeName(node) : null;
        if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
          const content = node.content;
          if (_isDocumentFragment(content)) stack.push({
            node: content,
            shadow: null
          });
        }
      }
      if (isElement) {
        const sr = getShadowRoot(node);
        if (_isDocumentFragment(sr)) stack.push({
          node: null,
          shadow: sr
        }, {
          node: sr,
          shadow: null
        });
      }
    }
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) dirty = "<!-->";
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      dirty = stringifyValue(dirty);
      if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
    }
    if (!DOMPurify.isSupported) return dirty;
    if (SET_CONFIG) {
      ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
      ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
    } else _parseConfig(cfg);
    if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) ALLOWED_TAGS = clone(ALLOWED_TAGS);
    if (hooks.uponSanitizeAttribute.length > 0) ALLOWED_ATTR = clone(ALLOWED_ATTR);
    DOMPurify.removed = [];
    const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
    let inPlaceNodes = [];
    const outerVisited = IN_PLACE_VISITED;
    if (inPlace) {
      _neutralizePatchLinkage(dirty);
      const nn = _readNodeName(dirty);
      if (typeof nn === "string") {
        const tagName = transformCaseFunc(nn);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          _neutralizeRoot(dirty);
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
      if (_isClobbered(dirty)) {
        _neutralizeRoot(dirty);
        throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
      }
      inPlaceNodes = _collectLiveNodes(dirty);
      IN_PLACE_VISITED = setCreate();
    } else if (_isNode(dirty)) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
      else if (importedNode.nodeName === "HTML") body = importedNode;
      else body.appendChild(importedNode);
      _sanitizeAttachedShadowRoots(body);
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
      body = _initDocument(dirty);
      if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
    }
    if (body && FORCE_BODY) _forceRemove(body.firstChild);
    const walkRoot = inPlace ? dirty : body;
    try {
      if (inPlace) _sanitizeAttachedShadowRoots(dirty);
      const nodeIterator = _createNodeIterator(walkRoot);
      while (currentNode = nodeIterator.nextNode()) {
        _sanitizeElements(currentNode, walkRoot);
        _sanitizeAttributes(currentNode, walkRoot);
        if (_isDocumentFragment(currentNode.content)) _sanitizeShadowDOM2(currentNode.content);
      }
      if (inPlace) _sanitizeUnvisitedNodes(dirty, inPlaceNodes);
    } catch (error) {
      if (inPlace) {
        _neutralizeRoot(dirty);
        _neutralizeDiscarded(dirty, inPlaceNodes);
      }
      throw error;
    } finally {
      IN_PLACE_VISITED = outerVisited;
    }
    if (inPlace) {
      if (_neutralizeDiscarded(dirty, inPlaceNodes)) throw typeErrorCreate("a node selected for removal could not be safely returned; refusing to sanitize in place");
      if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
      return dirty;
    }
    if (RETURN_DOM) {
      if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) returnNode.appendChild(body.firstChild);
      } else returnNode = body;
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    if (SAFE_FOR_TEMPLATES) serializedHTML = _stripTemplateExpressions(serializedHTML);
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
    SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
    SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
    SET_CONFIG_ALLOWED_TAGS = null;
    SET_CONFIG_ALLOWED_ATTR = null;
    trustedTypesPolicy = defaultTrustedTypesPolicy;
    emptyHTML = "";
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) _parseConfig({});
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    if (typeof value === "string" && (_isUnsafeAttributeValue(attr, value) || !ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value))) return false;
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") return;
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify_default = createDOMPurify();

// packages/web-content/markdown.mjs
function renderModMarkdown(value = "") {
  const fragment = purify_default.sanitize(x.parse(String(value).slice(0, 12e4), { async: false, gfm: true }), {
    RETURN_DOM_FRAGMENT: true,
    ALLOWED_TAGS: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "br", "hr", "ul", "ol", "li", "strong", "em", "del", "blockquote", "pre", "code", "a", "img", "table", "thead", "tbody", "tr", "th", "td"],
    ALLOWED_ATTR: ["href", "src", "alt", "title", "start"],
    ALLOW_DATA_ATTR: false
  });
  for (const element of fragment.querySelectorAll("[href],[src]")) {
    for (const attr of ["href", "src"]) {
      if (!element.hasAttribute(attr)) continue;
      const raw = element.getAttribute(attr);
      let url;
      try {
        url = new URL(raw, window.location.origin);
      } catch {
        element.removeAttribute(attr);
        continue;
      }
      const image = attr === "src";
      const allowed = image ? url.protocol === "https:" && ["cdn.modrinth.com", "minervalauncher.com"].includes(url.hostname) : url.origin === window.location.origin || url.protocol === "https:";
      if (!allowed || url.username || url.password) {
        element.removeAttribute(attr);
        continue;
      }
      if (image) {
        element.loading = "lazy";
        element.referrerPolicy = "no-referrer";
      } else if (url.origin !== window.location.origin) {
        element.rel = "noopener noreferrer";
        element.target = "_blank";
      }
    }
  }
  const container = document.createElement("div");
  container.append(fragment);
  return container.innerHTML;
}

// services/shared-world-map/mod-localization.mjs
function splitModLanguages(value = "") {
  const markers = [...value.matchAll(/^\s*(?:#{1,3}\s*)?(RU|EN|Русский|English)\s*$/gmi)];
  if (markers.length !== 2) return {};
  const result = {};
  markers.forEach((m, i) => {
    const key = /^(RU|Русский)$/i.test(m[1]) ? "ru" : "en";
    result[key] = value.slice(m.index + m[0].length, markers[i + 1]?.index ?? value.length).trim();
  });
  return result.ru && result.en ? result : {};
}

// apps/mods-site/src/main.mjs
var app = document.getElementById("app");
var languageButton = document.getElementById("language");
var endpoint = "/api/v1/mods";
var language = "ru";
try {
  const savedLanguage = localStorage.getItem("minerva-language") ?? localStorage.getItem("minerva-mods-language");
  if (savedLanguage === "en") language = "en";
} catch {
}
var query = "";
var game = "";
var loader = "";
var page = 0;
var offset = 0;
var controller;
var timer;
var lastItems = [];
var requestId = 0;
var returnPosition;
var versionSelections = /* @__PURE__ */ new Map();
var tr = (ru, en) => language === "ru" ? ru : en;
var projectId = () => new URLSearchParams(location.hash.slice(1)).get("project");
var idPattern = /^[a-f0-9-]{36}$/;
function el(tag, value, classes) {
  const node = document.createElement(tag);
  if (value) node.textContent = value;
  if (classes) node.className = classes;
  return node;
}
function anchor(label, href, classes) {
  const node = el("a", label, classes);
  node.href = href;
  return node;
}
function status(message, retry = false) {
  const row = el("div", "", "panel");
  const text2 = el("p", message);
  text2.setAttribute("role", retry ? "alert" : "status");
  row.append(text2);
  if (retry) {
    const button = el("button", tr("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C", "Retry"));
    button.addEventListener("click", () => render());
    row.append(button);
  }
  return row;
}
async function read(path, signal) {
  const response = await fetch(endpoint + path + (path.includes("?") ? "&" : "?") + "locale=" + language, { signal, credentials: "omit" });
  if (!response.ok) throw Object.assign(new Error("Catalog request failed"), { status: response.status });
  return response.json();
}
function markdown(text2) {
  const node = el("div", "", "mod-markdown");
  node.innerHTML = renderModMarkdown(text2);
  return node;
}
function localizedCopy(text2, originalEnglish = false) {
  const sections = splitModLanguages(text2 || "");
  return sections[language] ?? (Object.keys(sections).length ? "" : originalEnglish && language === "en" ? text2 : "");
}
function releaseMetadata(values) {
  const list = el("ul", "", "release-meta");
  for (const value of values.filter(Boolean)) list.append(el("li", value));
  return list;
}
function compatibility(item) {
  return [item.games.slice(0, 4).join(", "), item.loaders.join(", ")];
}
function projectIcon(item) {
  const icon = el("span", "", "project-icon");
  icon.setAttribute("aria-hidden", "true");
  const fallback = el("span", item.title.slice(0, 1).toUpperCase());
  icon.append(fallback);
  if (item.iconUrl?.startsWith("https://cdn.modrinth.com/data/")) {
    const image = el("img");
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";
    image.addEventListener("load", () => {
      fallback.hidden = true;
    }, { once: true });
    image.addEventListener("error", () => image.remove(), { once: true });
    image.src = item.iconUrl;
    icon.append(image);
  }
  return icon;
}
function card(item) {
  const row = el("article", "", "project");
  const copy = el("div");
  const title = el("div", "", "project-title");
  title.append(el("h2", item.title));
  if (item.modrinth) title.append(el("span", "\u2713 Modrinth", "source"));
  copy.append(title, el("p", item.summary), releaseMetadata(compatibility(item)));
  const open = anchor(tr("\u041E\u0442\u043A\u0440\u044B\u0442\u044C", "View"), "#project=" + encodeURIComponent(item.id), "action project-open");
  open.dataset.projectId = item.id;
  open.setAttribute("aria-label", tr("\u041E\u0442\u043A\u0440\u044B\u0442\u044C ", "View ") + item.title);
  open.addEventListener("click", () => {
    returnPosition = { top: scrollY, id: item.id };
  });
  row.append(projectIcon(item), copy, open);
  return row;
}
function select(label, value, entries2, change) {
  const field = el("label", label);
  const input = el("select");
  for (const [key, title] of entries2) {
    const option = el("option", title);
    option.value = key;
    input.append(option);
  }
  input.value = value;
  input.addEventListener("change", () => change(input.value));
  field.append(input);
  return field;
}
function catalog() {
  const controls = el("div", "", "toolbar");
  const field = el("label", tr("\u041F\u043E\u0438\u0441\u043A", "Search"));
  const input = el("input");
  input.type = "search";
  input.maxLength = 120;
  input.value = query;
  input.placeholder = tr("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", "Name or description");
  field.append(input);
  const results = el("div", "", "catalog-list");
  const actions = el("div", "", "actions pagination");
  let gameSelect;
  const knownGames = new Set(lastItems.flatMap((item) => item.games));
  if (game) knownGames.add(game);
  function rebuildGames() {
    const versionValues = [...knownGames].sort((a, b) => b.localeCompare(a, void 0, { numeric: true }));
    const field2 = select(
      tr("Minecraft", "Minecraft"),
      game,
      [["", tr("\u0412\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438", "All versions")], ...versionValues.map((version) => [version, version])],
      (value) => {
        game = value;
        page = 0;
        void search();
      }
    );
    if (!gameSelect) gameSelect = field2;
    else {
      const current = gameSelect.querySelector("select");
      const options = [...field2.querySelector("select").options];
      if (options.map((option) => option.value).join() !== [...current.options].map((option) => option.value).join()) {
        current.replaceChildren(...options);
        current.value = game;
      }
    }
  }
  rebuildGames();
  controls.append(field, gameSelect, select(
    tr("\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043A", "Loader"),
    loader,
    [["", tr("\u0412\u0441\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438", "All loaders")], ...["Fabric", "Quilt", "Forge", "NeoForge"].map((name) => [name.toLowerCase(), name])],
    (value) => {
      loader = value;
      page = 0;
      void search();
    }
  ));
  const intro = el("header", "", "catalog-intro view-entry");
  const heading = el("div");
  heading.append(
    el("h1", tr("\u041C\u043E\u0434\u044B Minerva", "Minerva Mods")),
    el("p", tr("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u0434 \u0438 \u0432\u0435\u0440\u0441\u0438\u044E Minecraft.", "Find a mod for your Minecraft version."), "intro")
  );
  intro.append(heading, controls);
  app.append(intro, results, actions);
  async function search() {
    controller?.abort();
    controller = new AbortController();
    const current = ++requestId;
    offset = page * 24;
    results.setAttribute("aria-busy", "true");
    if (!results.querySelector(".project")) results.replaceChildren(status(tr("\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u2026", "Loading mods\u2026")));
    actions.replaceChildren();
    try {
      const params = new URLSearchParams({ q: query, game, loader, offset: String(offset), limit: "24" });
      if (!game) params.delete("game");
      if (!loader) params.delete("loader");
      const data = await read("/search?" + params, controller.signal);
      if (current !== requestId) return;
      lastItems = data.items;
      for (const item of lastItems) for (const version of item.games) knownGames.add(version);
      rebuildGames();
      results.setAttribute("aria-busy", "false");
      results.replaceChildren(...data.items.length ? data.items.map(card) : [status(tr("\u041C\u043E\u0434\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B.", "No matching mods."))]);
      if (returnPosition) {
        const { top, id } = returnPosition;
        returnPosition = void 0;
        results.querySelector(`[data-project-id="${CSS.escape(id)}"]`)?.focus({ preventScroll: true });
        window.scrollTo(0, top);
      }
      for (const [direction, disabled, label] of [
        [-1, page === 0, tr("\u041D\u0430\u0437\u0430\u0434", "Previous")],
        [1, offset + data.items.length >= data.total, tr("\u0414\u0430\u043B\u0435\u0435", "Next")]
      ]) {
        const button = el("button", label);
        button.disabled = disabled;
        button.addEventListener("click", () => {
          page += direction;
          void search();
        });
        if (page > 0 || data.total > 24) actions.append(button);
      }
    } catch (error) {
      if (current === requestId && error.name !== "AbortError") {
        results.setAttribute("aria-busy", "false");
        results.replaceChildren(status(tr("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433.", "Could not load the catalog."), true));
      }
    }
  }
  input.addEventListener("input", () => {
    query = input.value.trim();
    page = 0;
    clearTimeout(timer);
    timer = setTimeout(search, 300);
  });
  void search();
}
function downloadUrl(version) {
  const url = new URL(version.url, location.origin);
  if (version.source === "minerva" && idPattern.test(version.id) && url.origin === location.origin && url.pathname === "/api/v1/mods/files/" + version.id) return url.href;
  if (version.source === "modrinth" && url.origin === "https://cdn.modrinth.com" && url.pathname.startsWith("/data/")) return url.href;
  return null;
}
function releaseCard(version) {
  const article = el("article", "", "project-version panel");
  const head = el("div", "", "section-head");
  const label = el("div", "", "version-heading");
  label.append(el("h3", version.title));
  if (version.title !== version.number) label.append(el("span", version.number, "muted"));
  head.append(label, el("span", version.source === "modrinth" ? "\u2713 Modrinth" : "Minerva", "source"));
  article.append(head, releaseMetadata([
    ...compatibility(version),
    version.channel,
    new Intl.DateTimeFormat(language, { dateStyle: "medium" }).format(new Date(version.date)),
    new Intl.NumberFormat(language, { maximumFractionDigits: 1 }).format(version.bytes / 1048576) + " MiB"
  ]));
  const copy = language === "ru" ? version.changesRu || localizedCopy(version.changes) : version.changesEn || localizedCopy(version.changes, true);
  if (copy) {
    const notes = el("details");
    notes.append(el("summary", tr("\u0427\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E", "Changelog")), markdown(copy));
    article.append(notes);
  }
  const dependencies = (version.dependencies || []).filter((item) => item.type === "required");
  if (dependencies.length) {
    const details = el("details");
    const list = el("ul");
    for (const item of dependencies) {
      const row = el("li");
      const name = item.project === "P7dR8mSH" ? "Fabric API" : tr("\u041F\u0440\u043E\u0435\u043A\u0442 ", "Project ") + (item.source === "modrinth" ? "Modrinth" : "Minerva");
      const href2 = item.source === "modrinth" ? "https://modrinth.com/mod/" + encodeURIComponent(item.project) : "#project=" + encodeURIComponent(item.project);
      row.append(anchor(name, href2));
      if (item.version) row.append(document.createTextNode(" " + item.version));
      list.append(row);
    }
    details.append(el("summary", tr("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438", "Required dependencies")), list);
    article.append(details);
  }
  const href = downloadUrl(version);
  if (href) article.append(anchor(tr("\u0421\u043A\u0430\u0447\u0430\u0442\u044C JAR", "Download JAR"), href, "action primary"));
  return article;
}
async function detail(id, navigated) {
  const current = ++requestId;
  controller = new AbortController();
  const panel = status(tr("\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0432\u0435\u0440\u0441\u0438\u0438\u2026", "Loading releases\u2026"));
  app.append(anchor(tr("\u0412\u0441\u0435 \u043C\u043E\u0434\u044B", "All mods"), "#catalog", "back-link"), panel);
  if (!idPattern.test(id)) {
    panel.replaceWith(status(tr("\u041C\u043E\u0434 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.", "Mod not found.")));
    return;
  }
  try {
    const item = await read("/projects/" + id, controller.signal);
    if (current !== requestId) return;
    panel.remove();
    const overview = el("header", "", "project-overview view-entry");
    const title = el("div", "", "project-detail-title");
    const heading = el("h1", item.title);
    heading.tabIndex = -1;
    title.append(projectIcon(item), heading);
    overview.append(title, el("p", item.summary, "intro"));
    if (item.modrinth && /^[a-zA-Z0-9]{4,32}$/.test(item.modrinth)) {
      overview.append(anchor(tr("\u041D\u0430 Modrinth", "On Modrinth"), "https://modrinth.com/mod/" + item.modrinth, "action"));
    }
    const body = el("div", "", "project-body");
    const content = el("div", "", "project-content");
    const sidebar = el("aside", "", "project-facts");
    sidebar.append(el("h2", tr("\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C", "Compatibility")), releaseMetadata(compatibility(item)), el("h2", tr("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A", "Source")), el("p", item.modrinth ? "Modrinth" : "Minerva"));
    if (item.modrinth) sidebar.append(anchor(tr("\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", "Original project"), "https://modrinth.com/mod/" + encodeURIComponent(item.modrinth), "action"));
    const tabs = el("div", "", "project-tabs");
    tabs.setAttribute("role", "tablist");
    tabs.setAttribute("aria-label", tr("\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u0430", "Project sections"));
    const panels = [];
    const buttons = [];
    const description = el("section", "", "project-description");
    const copy = item.locale === language ? item.description : localizedCopy(item.description, !!item.modrinth);
    description.append(copy ? markdown(copy) : el("p", tr("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u043F\u043E\u043A\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E.", "The English description has not been added yet."), "muted"));
    const versions = el("section", "", "version-workspace");
    const versionsTitle = el("h2", tr("\u0412\u0435\u0440\u0441\u0438\u0438", "Versions"));
    versionsTitle.id = "versions";
    versions.setAttribute("aria-labelledby", versionsTitle.id);
    versions.append(versionsTitle);
    const list = el("div", "", "version-list");
    const controls = el("div", "", "version-filters");
    const previous = versionSelections.get(id) || {};
    let selectedGame = item.games.includes(previous.game) ? previous.game : "", selectedLoader = item.loaders.includes(previous.loader) ? previous.loader : "";
    const remember = () => {
      if (!versionSelections.has(id) && versionSelections.size >= 20) versionSelections.delete(versionSelections.keys().next().value);
      versionSelections.set(id, { game: selectedGame, loader: selectedLoader });
    };
    const draw = () => {
      const values = item.versions.filter((v) => (!selectedGame || v.games.includes(selectedGame)) && (!selectedLoader || v.loaders.includes(selectedLoader)));
      list.replaceChildren(...values.length ? values.map(releaseCard) : [status(tr("\u041D\u0435\u0442 \u0432\u0435\u0440\u0441\u0438\u0439 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432.", "No versions match these filters."))]);
    };
    controls.append(select("Minecraft", selectedGame, [["", tr("\u0412\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438", "All versions")], ...item.games.map((v) => [v, v])], (v) => {
      selectedGame = v;
      remember();
      draw();
    }), select(tr("\u0417\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043A", "Loader"), selectedLoader, [["", tr("\u0412\u0441\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043A\u0438", "All loaders")], ...item.loaders.map((v) => [v, v])], (v) => {
      selectedLoader = v;
      remember();
      draw();
    }));
    draw();
    versions.append(controls, list);
    const historyPanel = el("section", "", "project-history");
    for (const version of item.versions) {
      const section = el("article");
      section.append(el("h2", version.number));
      const changes = language === "ru" ? version.changesRu || localizedCopy(version.changes) : version.changesEn || localizedCopy(version.changes, true);
      section.append(changes ? markdown(changes) : el("p", tr("\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B.", "English release notes have not been added."), "muted"));
      historyPanel.append(section);
    }
    const names = [["description", tr("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", "Description"), description], ["versions", tr("\u0412\u0435\u0440\u0441\u0438\u0438", "Versions"), versions], ["changelog", tr("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439", "Changelog"), historyPanel]];
    const activate = (index) => {
      panels.forEach((p, i) => p.hidden = i !== index);
      buttons.forEach((b, i) => {
        b.setAttribute("aria-selected", String(i === index));
        b.tabIndex = i === index ? 0 : -1;
      });
      const hash = new URLSearchParams(location.hash.slice(1));
      hash.set("tab", names[index][0]);
      history.replaceState(null, "", "#" + hash);
    };
    names.forEach(([key, label, panel2], index) => {
      const button = el("button", label);
      button.type = "button";
      button.id = "project-tab-" + key;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "project-panel-" + key);
      panel2.id = "project-panel-" + key;
      panel2.setAttribute("role", "tabpanel");
      panel2.setAttribute("aria-labelledby", button.id);
      button.addEventListener("click", () => activate(index));
      button.addEventListener("keydown", (event) => {
        if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          const next = event.key === "Home" ? 0 : event.key === "End" ? 2 : (index + (event.key === "ArrowRight" ? 1 : 2)) % 3;
          activate(next);
          buttons[next].focus();
        }
      });
      buttons.push(button);
      panels.push(panel2);
      tabs.append(button);
    });
    const download = el("button", tr("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u044E", "Choose a version"), "action primary");
    download.addEventListener("click", () => {
      activate(1);
      buttons[1].focus();
    });
    const actions = el("div", "", "project-actions");
    actions.append(download, ...overview.querySelectorAll(":scope > .action"));
    overview.append(actions);
    content.append(tabs, ...panels);
    body.append(content, sidebar);
    app.append(overview, body);
    const selected = new URLSearchParams(location.hash.slice(1)).get("tab");
    activate(Math.max(0, names.findIndex((row) => row[0] === selected)));
    if (navigated) heading.focus({ preventScroll: true });
  } catch (error) {
    if (current !== requestId || error.name === "AbortError") return;
    panel.replaceWith(error.status === 404 ? status(tr("\u041C\u043E\u0434 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.", "Mod not found.")) : status(tr("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0432\u0435\u0440\u0441\u0438\u0438.", "Could not load releases."), true));
  }
}
function render(navigated = false) {
  clearTimeout(timer);
  controller?.abort();
  requestId++;
  app.replaceChildren();
  if (navigated && projectId()) window.scrollTo(0, 0);
  document.documentElement.lang = language;
  document.title = tr("\u041C\u043E\u0434\u044B \xB7 Minerva", "Mods \xB7 Minerva");
  languageButton.textContent = tr("EN", "RU");
  languageButton.setAttribute("aria-label", tr("Switch to English", "\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439"));
  document.querySelector("[data-copy=catalog]").textContent = tr("\u041C\u043E\u0434\u044B", "Mods");
  document.querySelector("[data-copy=account]").textContent = tr("\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442", "Account");
  for (const [key, ru, en] of [
    ["skip", "\u041A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443", "Skip to content"],
    ["home", "\u0413\u043B\u0430\u0432\u043D\u0430\u044F", "Home"],
    ["help", "\u0413\u0430\u0439\u0434\u044B", "Guides"],
    ["support", "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430", "Support"],
    ["privacy", "\u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C", "Privacy"],
    ["terms", "\u0423\u0441\u043B\u043E\u0432\u0438\u044F", "Terms"]
  ]) document.querySelector(`[data-copy=${key}]`).textContent = tr(ru, en);
  const id = projectId();
  app.dataset.view = id ? "detail" : "catalog";
  if (id) void detail(id, navigated);
  else catalog();
}
languageButton.addEventListener("click", () => {
  language = tr("en", "ru");
  try {
    localStorage.setItem("minerva-language", language);
  } catch {
  }
  render();
});
history.scrollRestoration = "manual";
window.addEventListener("hashchange", () => {
  if (location.hash !== "#app") render(true);
});
render();
