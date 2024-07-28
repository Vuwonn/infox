import asyncHandler from "../utils/asyncHandler.js";

const usercontrol = 
    asyncHandler (
        async (req, res) =>  {
         res.status (200).json({ success: true, message: "Bhuwan chy" });
        }
    )
export default usercontrol