const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const version = "1";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SummonerLookup API Docs",
            version,
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    example: "Bearer <accessToken>"
                },
                cookieAuth: {
                    type: "string",
                    in: "cookie",
                    name: "slup",
                    example: "slup=s%3A<refreshToken>"
                }
            },
        },
        security: [
            {
                cookieAuth: [],
                bearerAuth: [],
            },
        ],
    },
    apis: ["./routers/*.js", "./validations/*.js", "./models/*.js", "./controllers/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
    // Swagger page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format
    app.get("/docs.json", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    console.log(`Docs available at http://localhost:${port}/docs`);
};

module.exports = swaggerDocs;