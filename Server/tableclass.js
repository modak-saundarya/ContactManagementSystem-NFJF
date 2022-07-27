class TableClass{
    constructor(customerID, firstname, lastname, dob, address, city, pin, contactno, email){
        this.customerID = customerID;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.address = address;
        this.city = city;
        this.pin = pin;
        this.contactno = contactno;
        this.email = email;
    }
}

module.exports = Table;