const config = {
    user: 'modak.saundarya',
    password: 'hellonfjf@12',
    server: 'INMUMSAUMODAK\\SQLEXPRESS', 
    database: 'CMS',
    port:5000, 
    options: {
        //encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

module.exports = config;