import React from "react";
import BaseField from "../../ui/BaseField";
import { useForm } from "react-hook-form";
import BaseBtn from "../../ui/BaseBtn";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function FooterLayout() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    toast.success("You have been subscribed!");
    console.log(data);
  };
  return (
    <footer className="w-full h-full py-10 mt-10">
      <div className="w-[80%] mx-auto flex flex-col items-center justify-between gap-40">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-1">
            <p className="text-xl mr-6 max-w-[240px]">
              Join our mailing list for the latest updates.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center gap-3"
            >
              <BaseField
                error={errors.email?.message}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <BaseBtn text={"Subscribe"} />
            </form>
          </div>
          <div className="w-full max-w-[320px]">
            <p className="text-xl">
              Empowering Visionaries: Stories of Collaboration and
              Transformation
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4">
            <Link to={"*"}>Privacy Policy</Link>
            <Link to={"*"}>Terms of Use</Link>
          </div>
          <div className="">
            <p className="text-md">© 2024 StudioX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
