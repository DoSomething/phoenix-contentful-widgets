// import contentfulExtension from 'contentful-ui-extensions-sdk';
import codeMirror from 'codemirror';
import cssMode from 'codemirror/mode/css/css';
import closeBracketsAddon from 'codemirror/addon/edit/closebrackets';
import matchBracketsAddon from 'codemirror/addon/edit/matchbrackets';

import 'codemirror/lib/codemirror.css';
import '../scss/main.scss';

// Reference to the extension API
const contentfulExtension = window.contentfulExtension;


contentfulExtension.init(function (extension) {
    console.log(extension);

    // Configure CodeMirror on specified element
    let config = {
        autoCloseBrackets: true,
        lineNumbers: true,
        mode: 'css',
        matchBrackets: true,
    };

    // Initialize CodeMirror on specified element
    let editor = codeMirror.fromTextArea(document.getElementById('css-editor'), config);

    console.log(editor);

    // Resizes the extension iframe whenever the size of the document changes.
    extension.window.startAutoResizer();

    extension.field.setValue("Hello world!")

    console.log(extension.field);

});

console.log(contentfulExtension);
