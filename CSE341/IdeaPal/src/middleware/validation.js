import { check } from "express-validator";

class validation {
  static saveVlidation = [
    check("title", "Title is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
  ];
}

export default validation;
