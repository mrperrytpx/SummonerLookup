const app = require("./server");

// Start server
app.listen(process.env.PORT, () => {
    console.log(
        `Server listening on port ${process.env.PORT ?? 3001} ${
            process.env.NODE_ENV === "development" &&
            `- http://localhost:${process.env.PORT}`
        }`
    );
});
