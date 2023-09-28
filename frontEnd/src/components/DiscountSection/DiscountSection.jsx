import React from "react";
import s from "./Discount.module.css";
import { useForm } from "react-hook-form";
export default function DiscountSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const getDiscount = register("discount", {
    required: "* This field must be filled",
    pattern: {
      value: / ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: "* Please,enter valid phone number",
    },
  });
  const submit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div  className={s.discountSection}>
      <div className={s.discountContainer}>
      <h2>5% off </h2>
      <h3>on the first order</h3>
      <form className={s.discountForm} onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          name="discount"
          placeholder="+49"
          {...getDiscount}
        />
        {errors.discount && (
          <p className={s.error}>{errors.discount.message}</p>
        )}
         <button onClick={handleSubmit(submit)}>Get a discount</button>
      </form>
     
      </div>
    </div>
  );
}
