const path = require('path');
const { greet, add, greetAll } = require('./functions');

function routes(app) {
    console.log('Routes function called!');
    
    app.get('/', (req, res) => {
        res.send(greet('Best CI/CD in the world!'));
    });

    app.get('/add', (req, res) => {
        console.log('GET /add called');
        res.sendFile(path.join(__dirname, 'pages', 'add.html'));
    });

    app.post('/add', (req, res) => {
        console.log('=== POST /add CALLED ===');
        console.log('Body:', req.body);
        
        const { num1, num2 } = req.body;
        console.log('num1:', num1, 'num2:', num2);
        
        const sum = add(Number(num1), Number(num2));
        console.log('Sum:', sum);
        
        // Send styled HTML response
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Calculation Result</title>
                <link rel="stylesheet" href="/result.css">
            </head>
            <body>
                <div class="result-container">
                    <div class="success-icon">✨</div>
                    <h1>Calculation Complete!</h1>
                    
                    <div class="result-box">
                        <div class="result-label">Sum Result</div>
                        <div class="result-value">${sum}</div>
                        <div class="calculation">${num1} + ${num2} = ${sum}</div>
                    </div>
                    
                    <a href="/add" class="back-button">← Calculate Again</a>
                </div>
            </body>
            </html>
        `);
    });

    app.get('/greetAll', (req, res) => {
        res.sendFile(path.join(__dirname, 'pages', 'greetAll.html'));
    });

    app.post('/greetAll', (req, res) => {
        console.log('=== POST /greetAll CALLED ===');
        const { names } = req.body;
        const namesArray = names.split(',').map(n => n.trim());
        const greetings = greetAll(namesArray);
        
        // Create HTML list of greetings
        const greetingItems = greetings.map((greeting, index) => 
            `<div class="greeting-item">
                <span class="greeting-icon">👋</span>
                ${greeting}
            </div>`
        ).join('');
        
        // Send styled HTML response
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Greetings Result</title>
                <link rel="stylesheet" href="/result.css">
            </head>
            <body>
                <div class="result-container">
                    <div class="success-icon">🎉</div>
                    <h1>Greetings Generated!</h1>
                    
                    <div class="count-badge">${greetings.length} ${greetings.length === 1 ? 'person' : 'people'} greeted</div>
                    
                    <div class="greetings-list">
                        ${greetingItems}
                    </div>
                    
                    <a href="/greetAll" class="back-button">← Greet More People</a>
                </div>
            </body>
            </html>
        `);
    });
}

module.exports = { routes };