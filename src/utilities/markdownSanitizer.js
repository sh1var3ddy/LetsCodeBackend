const marked = require('marked');
const sanitizeHtmlLibrary  = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    // 1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    //2. Sanitize html
    const sanitizedHtml =sanitizeHtmlLibrary(convertedHtml,
        {
            allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
        }
    )
    // converts html to markdown
    const turndownService = new  TurndownService();
    const sanitizedMarkdown  = turndownService.turndown(sanitizedHtml);
    console.log("Markdown is sanitized");
    return sanitizedMarkdown;
}

module.exports = {sanitizeMarkdownContent};