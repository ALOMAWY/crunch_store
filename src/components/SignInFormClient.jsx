"use client";
import signInAction from "@/_serverActions/signInAction";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

function SignInFormClient({ formAtts }) {
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatusMessage(null);

    const formData = new FormData(event.target);
    const response = await signInAction(formData);
    

    if (response?.success) {
      setStatusMessage("Sign-In successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      setStatusMessage(response?.error || "Sign-In failed. Please try again.");
    }
  };
  return (
    <div className="w-full max-w-xs mx-auto mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {formAtts.attributes.map((att, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={att.marker}
              className="block text-gray-600 text-sm font-bold mb-2"
            >
              {att.localizeInfos.title}
            </label>
            <input
              id={att.marker}
              type={
                att.marker === "name"
                  ? "text"
                  : att.marker === "email"
                  ? "email"
                  : att.marker === "password"
                  ? "password"
                  : "text"
              }
              name={att.marker}
              required={att.validators?.requiredValidator?.strict}
              className="border rounded w-full p-3 text-gray-600"
              placeholder={att.localizeInfos?.title}
            />
          </div>
        ))}
        {statusMessage && <p>{statusMessage}</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-gray-700 mt-4 py-2 px-4 rounded w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default SignInFormClient;
