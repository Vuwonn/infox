import asyncHandler from "../utils/asyncHandler.js";
import Contact from "../models/contactModel.js"; 

const registerContact = asyncHandler(async (req, res) => {
  const { alternatePhone, company, firstName, lastName, orgName, phone, province, software, email } = req.body;

  if (!alternatePhone || !company || !firstName || !lastName || !orgName || !phone || !province || !software || !email) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields.",
    });
  }

  try {
   
    const existingContact = await Contact.findOne({ company, email });
    if (existingContact) {
      return res.status(400).json({
        success: false,
        message: "A contact with this company and email already exists.",
      });
    }

    const newContact = new Contact({
      alternatePhone,
      company,
      firstName,
      lastName,
      orgName,
      phone,
      province,
      software,
      email,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Contact registered successfully",
      data: newContact,
    });
  } catch (error) {
    if (error.code === 11000) {
     
      return res.status(400).json({
        success: false,
        message: "Contact with this phone number or email already exists.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      error: error.message,
    });
  }
});

export default registerContact;
