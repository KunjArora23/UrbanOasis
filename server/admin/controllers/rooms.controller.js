import { deleteMediaFromCloudinary, uploadMedia } from "../utils/cloudinary.js"
import { db } from '../../user/db/db.js'
import fs from "fs/promises";

export const addRoom = async (req, res) => {
  try {
    const { roomNumber, roomType, pricePerNight, status } = req.body;

    if (!roomNumber || !roomType || !pricePerNight || !status) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      })
    }

    // Check if the room number already exists
    const [roomTypeRows] = await db.execute(
      `SELECT roomTypeId FROM roomTypes WHERE typeName = ?`,
      [roomType]
    );

    if (roomTypeRows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Room type not found.",
      });
    }

    const roomTypeId = roomTypeRows[0].roomTypeId;

    // Insert room into `rooms` table
    const [roomResult] = await db.execute(
      `INSERT INTO rooms (roomNumber, roomTypeId, pricePerNight, status) VALUES (?, ?, ?, ?)`,

      [roomNumber, roomTypeId, pricePerNight, status]
    );

    const roomId = roomResult.insertId;



    res.status(201).json({
      success: true,
      message: "Room added successfully.",
      roomId,
    });
  } catch (error) {
    console.error("Error adding room:", error);
    res.status(500).json({
      success: false,
      message: "Server error while adding room.",
    });
  }
};

export const deleteRoomByRoomNumber = async (req, res) => {
  try {
    const { roomNumber } = req.params;
    if (!roomNumber) {
      return res.status(400).json({
        success: false,
        message: "Room number is required",
      });
    }
    const [room] = await db.execute(`SELECT roomId FROM rooms WHERE roomNumber = ?`, [roomNumber]);
    if (room.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    const roomId = room[0].roomId;


    // Delete room from `rooms` table 
    await db.execute(`DELETE FROM rooms WHERE roomId = ?`, [roomId]);
    return res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });

  } catch (error) {
    console.error("Error in deleting room:", error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting the room",
    });
  }
}

export const editRoom = async (req, res) => {
  try {
    const { oldRoomNo } = req.params;

    const { newRoomType, newPricePerNight, newStatus } = req.body;

    if (!oldRoomNo) {
      return res.status(400).json({
        success: false,
        message: "Old Room Number is required",
      });
    }


    const oldRoomNoAsInt = Number(oldRoomNo);


    // fetching the roomId of the old room number for updating the room details
    const [room] = await db.execute(`SELECT roomId FROM rooms WHERE roomNumber = ?`, [oldRoomNoAsInt]);


    if (room.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Old Room not found",
      });
    }
    const roomId = room[0].roomId;

    // Check if the new room Type exists
    const [roomTypeRows] = await db.execute(
      `SELECT roomTypeId FROM roomTypes WHERE typeName = ?`,
      [newRoomType]
    );

    const newRoomTypeId = roomTypeRows[0]?.roomTypeId;
    if (!newRoomTypeId) {
      return res.status(404).json({
        success: false,
        message: "New Room type not found.",
      });
    }


    // Update room details in `rooms` table



    await db.execute(`UPDATE rooms SET roomTypeId = ?, pricePerNight = ?, status = ? WHERE roomNumber = ?`, [newRoomTypeId, newPricePerNight, newStatus, oldRoomNo]);



    return res.status(200).json({
      success: true,
      message: "Room updated successfully",
    })


  } catch (error) {
    console.error("Error in editing room:", error);
    return res.status(500).json({
      success: false,
      message: "Error while editing the room",
    });

  }
}

export const getAllRooms = async (req, res) => {
  try {
    const execute = `SELECT 
          r.roomId,
          r.roomNumber,
          r.status,
          r.pricePerNight,
          rt.roomTypeId,
          rt.typeName,
          rt.description,
          rt.capacity
        FROM 
          rooms r
        JOIN 
          roomTypes rt ON r.roomTypeId = rt.roomTypeId`;


    const [result] = await db.execute(execute);
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No rooms found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All rooms fetched successfully",
      data: result,
    });

  } catch (error) {
    console.error("Error in getting all rooms:", error);
    return res.status(500).json({
      success: false,
      message: "Error while fetching all the rooms",
    });
  }
};


// login to add room types
export const addRoomTypes = async (req, res) => {
  try {
    const { typeName, description, capacity } = req.body;
    const files = req.files;

    // console.log("Hello from add room types", files)
    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Room type image is required",
      });
    }
    const uploadedImages = [];
    for (const file of files) {
      const uploadRes = await uploadMedia(file.path, "UrbanOasis/roomTypes");
      uploadedImages.push(uploadRes.secure_url);
      // Delete temp file
      await fs.unlink(file.path);
    }
    const insertedroom = await db.execute(
      `INSERT INTO roomTypes (typeName, description, capacity) VALUES (?, ?, ?)`,
      [typeName, description, capacity]
    );
    // console.log("Inserted room types", insertedroom)
    const roomTypeId = insertedroom[0].insertId;


    console.log(uploadedImages)

    for (const imageUrl of uploadedImages) {
      await db.execute(
        `INSERT INTO roomPhotos (roomTypeId, photoUrl) VALUES (?, ?)`,
        [roomTypeId, imageUrl]
      );
    }


    return res.status(201).json({
      success: true,
      message: "Room type added successfully",
      roomTypeId,
    });

  } catch (error) {
    console.error("Error in adding room types:", error);
    return res.status(500).json({
      success: false,
      message: "Error while adding room types",
    });

  }
}


export const getFilteredRooms = async (req, res) => {
  try {
    const { type, status, search } = req.query;

    let query = `
      SELECT r.*, rt.typeName, rt.capacity 
      FROM rooms r
      JOIN roomTypes rt ON r.roomTypeId = rt.roomTypeId
      WHERE 1=1
    `;
    const params = [];

    // Filter by room type
    if (type) {
      query += " AND rt.typeName = ?";
      params.push(type);
    }
    console.log(query, params)
    // Filter by room status
    if (status) {
      query += " AND r.status = ?";
      params.push(status);
    }
    console.log(query, params)
    
    // Search by room number (partial match)
    if (search) {
      query += " AND r.roomNumber LIKE ?";
      params.push(`%${search}%`);
    }
    console.log(query, params)

    const [rooms] = await db.execute(query, params);

    return res.status(200).json({
      success: true,
      message: "Rooms fetched successfully",
      data: rooms,
    });

  } catch (error) {
    console.error("Error in getFilteredRooms:", error);
    return res.status(500).json({
      success: false,
      message: "Error while fetching rooms",
    });
  }
};
