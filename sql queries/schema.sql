CREATE DATABASE hotelManagement;
USE hotelManagement;

-- Guests Table
CREATE TABLE guests (
    guestId INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phoneNumber VARCHAR(15) NOT NULL,
    address VARCHAR(255),
    idType VARCHAR(50),
    idNumber VARCHAR(50),
    dateOfBirth DATE
);
-- admin table 
CREATE TABLE admin(
	email VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255) NOT NULL 
);
-- Users Table (for login system)
CREATE TABLE users (
    userId VARCHAR(255) PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    phoneNumber VARCHAR(15),
    password VARCHAR(255)
);



-- Room Types Table
CREATE TABLE roomTypes (
    roomTypeId INT PRIMARY KEY AUTO_INCREMENT,
    typeName VARCHAR(50) NOT NULL,
    capacity INT NOT NULL,
    description TEXT
);

-- Rooms Table
CREATE TABLE rooms (
    roomId INT PRIMARY KEY AUTO_INCREMENT,
    roomNumber INT UNIQUE NOT NULL,
    roomTypeId INT,
    status ENUM('available', 'occupied', 'maintenance') NOT NULL,
    pricePerNight DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (roomTypeId) REFERENCES roomTypes(roomTypeId) ON DELETE SET NULL
);



-- Room Photos Table
CREATE TABLE roomPhotos (
    photoId INT PRIMARY KEY AUTO_INCREMENT,
    roomTypeId INT,
    photoUrl VARCHAR(255) NOT NULL,  -- Store URL or file path to the photo
    FOREIGN KEY (roomTypeId) REFERENCES roomTypes(roomTypeId) ON DELETE CASCADE
);


-- Bookings Table
CREATE TABLE bookings (
    bookingId INT PRIMARY KEY AUTO_INCREMENT,
    guestId INT,
    roomId INT,
    checkInDate DATE NOT NULL,
    checkOutDate DATE NOT NULL,
    bookingStatus ENUM('confirmed', 'checked-in', 'checked-out', 'canceled') NOT NULL,
    totalAmount DECIMAL(10, 2) NOT NULL,
    paymentStatus ENUM('paid', 'unpaid') NOT NULL,
    FOREIGN KEY (guestId) REFERENCES guests(guestId) ON DELETE CASCADE,
    FOREIGN KEY (roomId) REFERENCES rooms(roomId) ON DELETE SET NULL
);


-- Departments Table
CREATE TABLE departments (
    departmentId INT PRIMARY KEY AUTO_INCREMENT,
    departmentName VARCHAR(50) NOT NULL
);

-- Employees Table
CREATE TABLE employees (
    employeeId INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phoneNumber VARCHAR(15) NOT NULL,
    position VARCHAR(50) NOT NULL,
    hireDate DATE NOT NULL,
    departmentId INT,
    FOREIGN KEY (departmentId) REFERENCES departments(departmentId) ON DELETE SET NULL
);

-- Employee Roles Table
CREATE TABLE employeeRoles (
    roleId INT PRIMARY KEY AUTO_INCREMENT,
    roleName VARCHAR(50) NOT NULL
);

-- Employee Department Roles Table
CREATE TABLE employeeDepartmentRoles (
    employeeId INT,
    departmentId INT,
    roleId INT,
    PRIMARY KEY (employeeId, departmentId, roleId),
    FOREIGN KEY (employeeId) REFERENCES employees(employeeId) ON DELETE CASCADE,
    FOREIGN KEY (departmentId) REFERENCES departments(departmentId) ON DELETE CASCADE,
    FOREIGN KEY (roleId) REFERENCES employeeRoles(roleId) ON DELETE CASCADE
);

-- Payments Table
CREATE TABLE payments (
    paymentId INT PRIMARY KEY AUTO_INCREMENT,
    bookingId INT,
    paymentDate DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    paymentMethod ENUM('credit card', 'cash', 'online') NOT NULL,
    FOREIGN KEY (bookingId) REFERENCES bookings(bookingId) ON DELETE CASCADE
);

-- Reservations Table
CREATE TABLE reservations (
    reservationId INT PRIMARY KEY AUTO_INCREMENT,
    guestId INT,
    reservationDate DATE NOT NULL,
    reservationTime TIME NOT NULL,
    numberOfPeople INT NOT NULL,
    FOREIGN KEY (guestId) REFERENCES guests(guestId) ON DELETE CASCADE
);

-- Logins Table (for user authentication)
CREATE TABLE logins (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    passwordHash VARCHAR(255) NOT NULL,
    employeeId INT,
    FOREIGN KEY (employeeId) REFERENCES employees(employeeId) ON DELETE CASCADE
);

-- Menu Items Table (for restaurant menu)
CREATE TABLE menuItems (
    menuItemId INT PRIMARY KEY AUTO_INCREMENT,
    itemName VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

-- Restaurant Orders Table (link between guests/dining guests and their orders)
CREATE TABLE restaurantOrders (
    orderId INT PRIMARY KEY AUTO_INCREMENT,
    guestId INT,
    diningGuestId INT,
    orderDate DATE NOT NULL,
    totalAmount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (guestId) REFERENCES guests(guestId) ON DELETE CASCADE,
    FOREIGN KEY (diningGuestId) REFERENCES guests(diningGuestId) ON DELETE CASCADE
);

-- Order Details Table (details for each menu item in an order)
CREATE TABLE orderDetails (
    orderDetailId INT PRIMARY KEY AUTO_INCREMENT,
    orderId INT,
    menuItemId INT,
    quantity INT NOT NULL,
    itemPrice DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (orderId) REFERENCES restaurantOrders(orderId) ON DELETE CASCADE,
    FOREIGN KEY (menuItemId) REFERENCES menuItems(menuItemId) ON DELETE CASCADE
);

-- Salaries Table (employee payments)
CREATE TABLE salaries (
    salaryId INT PRIMARY KEY AUTO_INCREMENT,
    employeeId INT,
    amount DECIMAL(10, 2) NOT NULL,
    payDate DATE NOT NULL,
    FOREIGN KEY (employeeId) REFERENCES employees(employeeId) ON DELETE CASCADE
);

-- Services Table (hotel services like spa, laundry, etc.)
CREATE TABLE services (
    serviceId INT PRIMARY KEY AUTO_INCREMENT,
    serviceName VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

-- Employee Services Table (services provided by employees)
CREATE TABLE employeeServices (
    employeeId INT,
    serviceId INT,
    PRIMARY KEY (employeeId, serviceId),
    FOREIGN KEY (employeeId) REFERENCES employees(employeeId) ON DELETE CASCADE,
    FOREIGN KEY (serviceId) REFERENCES services(serviceId) ON DELETE CASCADE
);

-- Guest Services Table (link between guests and the services they requested)
CREATE TABLE guestServices (
    guestServiceId INT PRIMARY KEY AUTO_INCREMENT,
    guestId INT,
    serviceId INT,
    serviceDate DATE NOT NULL,
    serviceTime TIME NOT NULL,
    totalAmount DECIMAL(10, 2) NOT NULL,
    paymentStatus ENUM('paid', 'unpaid') NOT NULL,
    employeeId INT,
    serviceFor ENUM('guest', 'dining_guest', 'front_office') NOT NULL,
    FOREIGN KEY (guestId) REFERENCES guests(guestId) ON DELETE CASCADE,
    FOREIGN KEY (serviceId) REFERENCES services(serviceId) ON DELETE CASCADE,
    FOREIGN KEY (employeeId) REFERENCES employees(employeeId) ON DELETE SET NULL
);
