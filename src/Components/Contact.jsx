import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // TODO: Replace with actual email sending API call
      await new Promise((r) => setTimeout(r, 1500));
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrors({ submit: "Failed to send message, please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.section
      className="container max-w-3xl mx-auto my-16 px-4 sm:px-6 md:px-8 text-gray-900 dark:text-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-6 tracking-tight">Contact Me</h1>
      <p className="mb-8 text-lg">
        Feel free to reach out for collaborations, consultancy or to discuss
        opportunities.
      </p>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={submitting}
            className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"
            } bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={submitting}
            className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"
            } bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={submitting}
            className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-primary"
            } bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 resize-none`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submission error */}
        {errors.submit && (
          <p className="text-red-600 font-semibold mb-4">{errors.submit}</p>
        )}

        {/* Success message */}
        {success && (
          <p className="text-green-600 font-semibold mb-4">
            Message sent successfully!
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-primary hover:bg-accent text-white font-semibold rounded transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
