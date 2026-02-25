import React from "react";
import BaseBtn from "../BaseBtn";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import BaseField from "../BaseField";

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    toast.success("Message sent successfully!");
    console.log(data);
  };

  return (
    <form
      className="w-[80%] max-w-[990px] mx-auto flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <BaseField
        error={errors.name?.message}
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 2,
            message: "Name must be at least 2 characters",
          },
        })}
      />
      <BaseField
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        })}
      />
      <BaseField
        IsTextArea={true}
        error={errors.message?.message}
        {...register("message", { required: "Message is required" })}
      />
      <BaseBtn text={"Send message"} />
    </form>
  );
}
