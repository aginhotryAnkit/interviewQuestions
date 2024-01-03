// reverse all the words in the string

var reverseWords = function(s) {
    return s.replace(/\s+/g, ' ').trim().split(" ").reverse().join(" ");

}
reverseWords(" a good   example ");


// (/\s+/g, ' ') means :- 
// This is a JavaScript code snippet that uses the replace method with a regular expression to replace multiple consecutive whitespace characters with a single space. Let's break it down:

// /.../: This syntax denotes a regular expression literal in JavaScript. Regular expressions are patterns that can be used to match character combinations in strings.

// \s+: This part of the regular expression is a pattern that matches one or more whitespace characters. The \s represents any whitespace character (such as space, tab, or newline), and the + quantifier specifies that one or more of these whitespace characters should be matched.

// g: This is a flag that stands for "global." When used with the regular expression, it indicates that the replacement should be applied globally throughout the entire input string, not just at the first occurrence.

// , ' ': This part of the replace method specifies the replacement string. In this case, it's a single space.

