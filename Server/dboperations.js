var config = require('./dbconfig')
const sql = require('mssql')

async function getTables(){
    try{
        let pool = await sql.connect(config);
        let contacts = await pool.request().query("Select * from contact");
        return contacts.recordsets;
    }
    catch (error){
        log.console(error);
    }
}

async function getTable(){
    try {
        let pool = await sql.connect(config);
        let contact = await pool.request()
        .input('input_parameter', sql.VarChar(255), FirstName)
        .query("Select * from contact where FirstName = @input_parameter")
        return contact.recordsets
    } catch (error) {
        console.log(error)
    }
}

async function addRow(){
    try {
        let pool = await sql.connect(config);
        let insertContact = await pool.request()
        .input('CustomerId', sql.Int, contact.CustomerId)
        .input('FirstName', sql.VarChar, contact.CustomerId)
        .input('LastName', sql.VarChar, contact.CustomerId)
        .input('DOB', sql.Date, contact.CustomerId)
        .input('Address', sql.VarChar, contact.CustomerId)
        .input('City', sql.VarChar, contact.CustomerId)
        .input('Pincode', sql.VarChar(6), contact.CustomerId)
        .input('ContactNo', sql.VarChar(15), contact.CustomerId)
        .input('Email', sql.VarChar, contact.CustomerId)
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    getTables: getTable,
    getTable: getTable,
    addRow: addRow
}