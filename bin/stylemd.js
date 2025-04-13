#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs-extra');
const marked = require('marked');
const handlebars = require('handlebars');
const path = require('path');

// -- Marked Customization Start --
const renderer = new marked.Renderer();
const originalCodeRenderer = renderer.code;
renderer.code = function(code, language, isEscaped) {
  // Wrap each line in a span with a class
  const lines = code.split('\n');
  const wrappedLines = lines.map(line => `<span class="code-line">${line || ' '}</span>`).join('\n');
  // Use the original renderer but with modified code
  return originalCodeRenderer.call(this, wrappedLines, language, isEscaped);
};
marked.setOptions({
  renderer: renderer
});
// -- Marked Customization End --

// Register Handlebars helper for formatting date
handlebars.registerHelper('formatDate', function() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
});

// Register Handlebars helper for formatting time (HH:MM AM/PM)
handlebars.registerHelper('formatTime', function() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
});

program
  .version('0.1.0')
  .description('Generate styled HTML pages from Markdown files with themes.')
  .argument('<markdownFile>', 'Path to the Markdown file (.md)')
  .option('-t, --template <name>', 'Template to use (e.g., default, windows98, terminal)', 'default')
  .option('-o, --output <file>', 'Output HTML file path (e.g., index.html)', 'index.html')
  .action(async (markdownFile, options) => {
    const chalk = (await import('chalk')).default;
    const { template, output } = options;

    try {
      const markdownContent = await fs.readFile(markdownFile, 'utf8');
      const htmlContent = marked.parse(markdownContent);

      const templatesDir = path.join(__dirname, '..', 'templates');
      const templatePath = path.join(templatesDir, `${template}.hbs`);
      const defaultTemplatePath = path.join(templatesDir, 'default.hbs');
      let templateSource;

      try {
        templateSource = await fs.readFile(templatePath, 'utf8');
      } catch (error) {
        if (template !== 'default') {
          console.warn(chalk.yellow(`Template "${template}" not found. Using default template.`));
        }
        templateSource = await fs.readFile(defaultTemplatePath, 'utf8');
      }

      const handlebarsTemplate = handlebars.compile(templateSource);
      const finalHtml = handlebarsTemplate({ content: htmlContent });

      await fs.outputFile(output, finalHtml, 'utf8'); // Ensure output directory exists
      console.log(chalk.green(`Successfully generated ${output} using the "${template}" template.`));

    } catch (error) {
      console.error(chalk.red(`Error processing Markdown file: ${error.message}`));
    }
  });

program.parse(process.argv); 