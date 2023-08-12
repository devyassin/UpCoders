import { Toastfailed } from "./Toast";

export const zodHandllingErrors = (
  validationSchema: any,
  ObjToValidate: any
) => {
  const results = validationSchema.safeParse(ObjToValidate);
  if (!results.success) {
    const errors = results.error.format();
    const errorValues: any = Object.values(errors);
    const errorKeys: any = Object.keys(errors);
    if (errorValues.length > 0) {
      const errorMessage = errorKeys[1] + " " + errorValues[1]._errors[0];
      Toastfailed(errorMessage);
    }
    return false;
  } else {
    return true;
  }
};
