import familyModel from "../models/familyModel.js";
export const registerController = async (req, res) => {
  try {
    const { fatherName, motherName } = req.body;
    //validations
    if (!fatherName) {
      return res.send({ error: "fatherName is Required" });
    }
    if (!motherName) {
      return res.send({ message: "motherName is Required" });
    }
    //check user
    const exisitingUser = await familyModel.findOne({ fatherName , motherName });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    
    //save
    const user = await new familyModel({
        fatherName,
        motherName
    }).save();

    res.status(201).send({
      success: true,
      message: "Family Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};
