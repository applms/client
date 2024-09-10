import * as Yup from "yup";
import { ILogin } from "@/types/forms";

export const initialLoginValues: ILogin = {
  email: "",
  password: "",
};

export const validationLoginSchema = Yup.object<ILogin>().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});
