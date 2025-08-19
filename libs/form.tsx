//- libs/form.tsx

import { ChevronDown } from "lucide-react";
import { UseFormRegister } from "react-hook-form";
import { ErrMsg } from "./messages";

export const FormField = ({
  id,
  label,
  column = false,
  children,
  error
}: {
  id: string,
  label: string,
  column?: boolean
  children: React.ReactNode,
  error?: string,
}) => (
  <div className={column === true ? 'sm:col-span-3' : 'sm:col-span-4'}>
    <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">{label}</label>
    <div className="mt-1">
      {children}
      {error && <ErrMsg type="info" message={error} />}
    </div>
  </div>
);

export const FormInputText = ({ type = 'text', id, label, placeholder, column = false, register, error }: {
  type?: string,
  id: string,
  label: string,
  placeholder?: string,
  column?: boolean,
  register: UseFormRegister<any>
  error?: string
}) => (
  <FormField id={id} label={label} column={column} error={error}>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`form-input ${error ? 'form-input-error' : 'form-input-normal'}`}
      {...register(id)}
    />
  </FormField>
);

export const FormInputTextarea = ({ id, label, placeholder, row = 5, column = false, register, error }: {
  id: string,
  label: string,
  placeholder?: string,
  row?: number,
  column?: boolean,
  register: UseFormRegister<any>
  error?: string
}) => (
  <FormField id={id} label={label} column={column} error={error}>
    <textarea
      id={id}
      placeholder={placeholder}
      rows={row}
      className={`form-input ${error ? 'form-input-error' : 'form-input-normal'}`}
      {...register(id)}
    ></textarea>
  </FormField>
);

export const FormSelectOption = ({
  id,
  label,
  values,
  register,
  column = false,
  error
}: {
  id: string,
  label: string,
  values: string[],
  register: UseFormRegister<any>,
  column?: boolean,
  error?: string
}) => (
  <FormField id={id} label={label} column={column} error={error}>
    <div className="mt-1 grid grid-cols-1">
      <select
        id={id}
        {...register(id)}
        className={`form-select ${error ? 'form-select-error' : 'form-select-normal'}`}
      >
        <option value="">Select {label}</option>
        {values.map((val, idx) => <option key={idx} value={val}>{val}</option>)}
      </select>
      <ChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
    </div>
  </FormField>
);

type FormCheckboxProps = {
  value: string;
  label: string;
};

export const FormCheckbox = ({
  name,
  label,
  values,
  register,
  column = false,
  error
}: {
  name: string,
  label: string,
  values: FormCheckboxProps[],
  register: UseFormRegister<any>,
  column?: boolean,
  error?: string
}) => (
  <FormField
    id={name}
    label={label}
    column={column}
    error={error}
  >
    {values.map(({ value, label }) => (
      <div key={value} className="flex items-center gap-2">
        <input
          type="checkbox"
          id={value}
          value={value}
          className="h-4 w-4 text-base border border-gray-200 rounded-md focus:ring-blue-500 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50"
          {...register(name)}
        />
        <label htmlFor={value} className="text-sm/6 font-normal text-gray-900">{label}</label>
      </div>
    ))}
  </FormField>
);