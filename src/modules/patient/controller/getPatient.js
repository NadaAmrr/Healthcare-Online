import { asyncErrorHandler } from "../../../utils/errorHandling.js";
import patientModel from "../../../../DB/models/Patient.model.js";
import getUser from "../../../utils/handlers/getUser.js";
import doctorModel from "../../../../DB/models/Doctor.model.js";

const getUserController =  asyncErrorHandler(async (req, res, next) => {
  if (req.originalUrl.includes("patient")){
    getUser(patientModel)(req, res, next);}
  else getUser(doctorModel)(req, res, next);
});

export default getUserController;
