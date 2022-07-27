const config = {
    user: 'anshul',
    password: 'anshul',
    server: 'INMUMAKHILRANI', 
    database: 'CMS',
    port:5000, 
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        instance: 'SQLEXPRESS',
    }
}

module.exports = config;