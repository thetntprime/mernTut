import dotenv from 'dotenv';
dotenv.config();

const config = {
    connection: process.env['CONNECTION'],
    port: process.env['PORT']
}

export default config;