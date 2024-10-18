import dotenv from 'dotenv';
dotenv.config({ path: '../.env'});

const config = {
    connection: process.env['CONNECTION'],
    port: process.env['PORT']
};

export default config;