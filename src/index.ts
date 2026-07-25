import { createServer, IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv'

dotenv.config();

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Server running")
})

const PORT = process.env.PORT || 3000;

server.listen( PORT, () => { 
    console.log(`Server running on http://localhost:${PORT}`)
})