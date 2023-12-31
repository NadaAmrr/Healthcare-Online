import { asyncErrorHandler } from "../../../utils/errorHandling.js";
import patientModel from "../../../../DB/models/Patient.model.js";
import doctorModel from "../../../../DB/models/Doctor.model.js";
import changePassword from "../function/changePassword.js";


const changePasswordController = asyncErrorHandler(async(req, res, next) => {
  if (req.originalUrl.includes("patient"))
    changePassword(patientModel)(req, res, next);
  else changePassword(doctorModel)(req, res, next);
});

export default changePasswordController;

