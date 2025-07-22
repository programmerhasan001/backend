// file system
const fs = require('fs');

// fs.writeFile("message.txt", "Hello from nodejs", (err) => {
//     if(err) throw new Error("failed to crate file");
//     console.log("file created successfully");
// })

fs.readFile("message.txt", 'utf8', (err, data) => {
    if(err) {
        console.log("Error reading file", err);
        return;
    }

    console.log('File content:', data);
})