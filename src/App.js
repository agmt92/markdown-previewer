import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { marked } from 'marked';

// GIBERRISH INPUT-TEXT-STATE SKIP DOWN TO LINE 104!!!
const primaryInput = {
  text: `### Markdown Text Content

Here's a detailed look at what the markdown file contains:

# Welcome to My React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Let's start with some code, \`<div></div>\`, snugly wrapped between 2 backticks.

\`\`\`javascript
// Let's talk about multi-line code:

function whyDidTheChickenCrossTheRoad(punchline, setup) {
  if (punchline === 'To get to the other side!' && setup === 'Why did the chicken cross the road?') {
    console.log('🤣');
  } else {
    console.log('Bawk bawk, try again!');
  }
}
\`\`\`

**BOLD** text? Absolutely mind-blowing!  
*Italic* text? More stylish than a chicken in a tuxedo.  
**_Bold and Italic_**? Now we're getting fancy.  
~~Strike that out~~ like it owes you money!

Check out these [links](https://example.com) if you're feeling adventurous.

> Block Quotes! They're not just for philosophers.

And if you want to get really crazy, even tables:

| Wild Header    | Crazy Header  | Another Header? |
| -------------- | ------------- | --------------- |
| Your content   | can be here,  | and it can be   |
| here....       | and here.     | Okay. I think   |
| we get it.     |               |                 |

- And of course, there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Image](https://via.placeholder.com/150)

### How to Use It

1. **Download** the \`.txt\` file from the link provided above.
2. **Open** the file in any text editor.
3. **Copy** the content.
4. **Paste** it into your markdown editor as the default content.

### Troubleshooting Overflow

If you're still facing issues with text escaping the markdown container, consider implementing the following CSS styles to ensure proper text wrapping and handling of overflow:

css
#previewer-container {
  overflow: auto;
  max-height: 400px; /* Adjust this value as needed */
  word-wrap: break-word;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 5px;
}

code {
  white-space: pre-wrap; /* Prevents code from overflowing */
  word-wrap: break-word;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: auto;
}


### Explanation of CSS:

- **\`overflow: auto;\`**: This will allow scrolling if the content overflows.
- **\`max-height: 400px;\`**: Sets a maximum height for your preview container, ensuring it doesn't stretch too far vertically.
- **\`word-wrap: break-word;\`**: Ensures that long words will break and wrap to the next line if needed.
- **\`white-space: pre-wrap;\`**: Preserves whitespace but allows text to wrap normally.

Implementing these styles should help keep the text within the designated container and ensure the markdown displays properly.

If you have any more questions or need further assistance, feel free to ask!`,
};

// Define the Editor component
class Editor extends React.Component {
  render() {
    const { change } = this.props;
    return (
      <div id="editor-container" className="window">
        <div className="window-title">Editor</div>
        <button className="toggle-btn" onClick={this.props.toggleView}></button>
        <textarea
          id="editor"
          value={this.props.input}
          onChange={change}
          placeholder="Enter Markdown text..."
        />
      </div>
    );
  }
}

// Define the Previewer component
class Previewer extends React.Component {
  render() {
    return (
      <div id="previewer-container" className="window">
        <div className="window-title">Previewer</div>
        <button className="toggle-btn" onClick={this.props.toggleView}></button>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(this.props.codeText) }}
        ></div>
      </div>
    );
  }
}

// Define the main App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: primaryInput.text
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  // Handle changes in the textarea
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  // Toggle full-page view
  toggleView(component) {
    this.setState((prevState) => ({
      isFullPage: !prevState.isFullPage,
      fullPageComponent: component,
    }));
  }

  // Render 
  render() {
    const { isFullPage, fullPageComponent, input } = this.state;
    return (
      <div
        className={`app-container ${isFullPage ? 'full-page' : 'side-by-side'}`}
      >
        {(!isFullPage || fullPageComponent === 'editor') && (
          <Editor
            input={input}
            change={this.handleChange}
            toggleView={() => this.toggleView('editor')}
          />
        )}
        {(!isFullPage || fullPageComponent === 'previewer') && (
          <Previewer
            codeText={input}
            toggleView={() => this.toggleView('previewer')}
          />
        )}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App;


