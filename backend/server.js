const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const cors = require('cors');
app.use(cors());

const FILE_PATH = 'emails.json';

app.post('/submit-email', (req, res) => {
    const email = req.body.email;

    // Check if the email is valid (you can add more robust email validation)
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: "Invalid email address" });
    }

    // Read the existing emails
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading file');
        }

        const emails = data ? JSON.parse(data) : [];
        emails.push(email);

        // Write the updated emails back to the file
        fs.writeFile(FILE_PATH, JSON.stringify(emails, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }

            res.json({ message: "Email received successfully!" });
        });
    });
});

// Helper function to validate email format (you can use a library for better validation)
function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
}
