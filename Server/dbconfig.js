const config = {
    user: 'modak.saundarya',
    password: 'hellonfjf@12',
    server: 'INMUMSAUMODAK', 
    database: 'CMS',
    port:5000, 
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        instancename: 'SQLEXPRESS'
    }
}

module.exports = config;