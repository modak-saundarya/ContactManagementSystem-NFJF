create database contactManagement;
create table contact (
CustomerId int NOT NULL IDENTITY(1,1),
FirstName varchar(255) NOT NULL,
LastName varchar(255),
DOB DATE,
Address varchar(255),
City varchar(255),
Pincode varchar(6),
ContactNo varchar(15) NOT NULL UNIQUE,
Email varchar(255),

PRIMARY KEY (CustomerId)
);

EXEC sp_help 'dbo.contact';

ALTER TABLE contact
  ADD IsDeleted BIT NOT NULL DEFAULT 0;
