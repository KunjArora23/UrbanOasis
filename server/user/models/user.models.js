import { Sequelize } from 'sequelize';

// Set up a new Sequelize instance

const sequelize = new Sequelize(`mysql://user:password@localhost:3306/hotelmanagement`, {
    dialect: 'mysql',
    logging: false // Set to true to log SQL queries
});

export default sequelize;
