import express, { Router } from 'express';
import {adminLogin, adminLogout} from '../controllers/admin.controller.js';



const adminRouter=Router();

console.log("admin router is working")
adminRouter.route('/login').post(adminLogin);
adminRouter.route('/logout').get(adminLogout);


export default adminRouter;