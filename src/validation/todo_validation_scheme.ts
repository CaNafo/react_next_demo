import * as Yup from "yup";

export const todoValidationScheme = Yup.object({
    test: Yup.string().required().min(5, "Min no. of chars is 5")
});