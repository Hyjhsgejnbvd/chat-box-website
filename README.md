# Chat Box Website

This project is a simple chat box web application built using Flask. It allows users to send and receive messages in real-time.

## Project Structure

```
chat-box-website
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── templates
│   │   └── index.html
│   ├── static
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       └── scripts.js
│   └── routes
│       └── chat.py
├── requirements.txt
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd chat-box-website
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

1. Run the application:
   ```
   python app/main.py
   ```

2. Open your web browser and go to `http://127.0.0.1:5000` to access the chat box interface.

## Features

- Real-time messaging
- User-friendly interface
- Responsive design

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.