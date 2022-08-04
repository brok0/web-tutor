import { Field, ErrorMessage } from "formik";
import { memo } from "react";

export const InputField = memo(({ label, name, type, subtype, options }) => {
  return (
    <div className="mx-2 my-1 w3/4 flex flex-col">
      <label className="font-bolder">{label}</label>
      {!options ? (
        <Field as={subtype} type={type} name={name} className="border px-1" />
      ) : (
        <Field as="select" name={name} className="border">
          <option value=""></option>
          {options.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </Field>
      )}

      <ErrorMessage name={name} component="div" className="text-sm text-red-600 " />
    </div>
  );
});
