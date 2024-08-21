# Markdown Previewer

This project is a test of the freeCodeCamp Front End Development Libraries curriculum. It is a Markdown Previewer built using React and Redux. The application allows users to write Markdown text in a text area and see a preview of the rendered HTML in real-time. 
Code is my own.

You can view the live demo of the project [here](https://agmt92.github.io/markdown-previewer/).

## Table of Contents

- Introduction
- Features
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- Usage
- [Project Structure](#project-structure)
- Troubleshooting
- Contributing
- License

## Introduction

The Markdown Previewer is a web application that provides a simple interface for writing and previewing Markdown text. It is built using React for the user interface and Redux for state management.


## Features

- **Real-Time Preview**: See the rendered HTML as you type Markdown text.
- **Markdown Syntax Support**: Supports various Markdown syntax including headings, lists, code blocks, and more.
- **Responsive Design**: The application is responsive and works well on different screen sizes.
- **Toggle View**: Switch between side-by-side and full-page views for the editor and previewer.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **SCSS**: For styling the application.
- **Bootstrap**: For responsive design.
- **Marked**: For parsing Markdown text to HTML.
- **JavaScript**: For handling logic and interactions.

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/markdown-previewer.git
    cd markdown-previewer
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **Open the application**:
    Open your web browser and go to [`http://localhost:3000`](http://localhost:3000).

## Usage

- **Write Markdown**: Type Markdown text in the editor on the left.
- **Preview HTML**: See the rendered HTML in the previewer on the right.
- **Toggle View**: Click the toggle button to switch between side-by-side and full-page views.

## Project Structure

```
markdown-previewer/
│
├── public/                 # Public assets
│   ├── index.html          # Main HTML file
│   └── ...
│
├── src/                    # Source files
│   ├── App.js              # Main App component
│   ├── App.scss            # SCSS styles
│   ├── index.js            # Entry point
│   ├── redux/              # Redux actions and reducers
│   └── ...
│
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Troubleshooting

If port 3000 is already in use, you can find the process ID (PID) and kill it using the following steps:

1. **Find the PID**:
    ```bash
    lsof -i :3000
    ```

    This command will list the processes using port 3000. Look for the PID in the output.

2. **Kill the process**:
    ```bash
    kill -9 <PID>
    ```

    Replace `<PID>` with the actual process ID you found in the previous step.

3. **Restart the server**:
    ```bash
    npm start
    ```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Thank you for checking out my Markdown Previewer project! If you have any questions or feedback, feel free to reach out.
