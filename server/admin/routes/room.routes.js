import express, { Router } from 'express';
import { getAllRooms, addRoom, deleteRoomByRoomNumber, editRoom, addRoomTypes, getFilteredRooms } from '../controllers/rooms.controller.js';
import { isAdminAuthenticated } from '../middlewares/isAdminAuthenticated.middleware.js';
import upload from '../utils/multer.js';






const roomRouter = express();

console.log("admin room router is working")
roomRouter.route('/all').get(isAdminAuthenticated, getAllRooms);
roomRouter.route('/getFilteredRooms').get(isAdminAuthenticated, getFilteredRooms);

roomRouter.post('/add', isAdminAuthenticated, addRoom);
roomRouter.post('/addRoomTypes', isAdminAuthenticated, upload.array("photos", 4), addRoomTypes);
roomRouter.delete('/delete/:roomNumber', isAdminAuthenticated, deleteRoomByRoomNumber);
roomRouter.patch('/edit/:oldRoomNo', isAdminAuthenticated, editRoom);


export default roomRouter;