import "dotenv/config"
import express, { Application, NextFunction, Request, Response } from 'express';

export const server = async (): Promise<void> => {
    try {
        const app: Application = express();
        app.use(express.json());

        // Port
        app.listen(process.env.APP_PORT, () => console.log("server is running on port: " + process.env.APP_PORT));

        // Error handling
        app.use((error: any, req: Request, res: Response, next: NextFunction) => {
            res.status(error.code).json({ error: error.message });
            next();
        });

    } catch (error) {
        console.error(error);
        process.exit(-1);
    }
}

server();
