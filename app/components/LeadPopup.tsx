"use client";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  club: string;
}

const LeadPopup: React.FC<LeadPopupProps> = ({ isOpen, onClose, club }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    // avoid double submissions
    if (loading) return;

    setLoading(true);
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // if network response not ok -> throw
      if (!response.ok) {
        // try parse error body for debugging (optional)
        const errText = await response.text();
        throw new Error(`Network response not ok: ${errText || response.status}`);
      }

      const result = await response.json();

      // web3forms returns { success: true } on success
      if (result?.success) {
        form.reset(); // clear fields immediately
        toast.success("Form submitted successfully 🎉");

        // Give the toast a moment to appear, then close the popup
        setTimeout(() => {
          onClose();
        }, 1300);
      } else {
        // show message from API if present, else generic
        const message =
          result?.message || result?.error || "Something went wrong. Please try again ❌";
        toast.error(message);
      }
    } catch (err) {
      // show friendly message (and log raw error in console for debugging)
      console.error("LeadPopup submit error:", err);
      toast.error("Network error. Please try again later ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      // Backdrop
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      // only allow closing by backdrop if not currently submitting
      onClick={() => {
        if (!loading) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Popup Content */}
      <div
        className="bg-neutral-900 p-8 rounded-2xl shadow-lg shadow-[0_0_20px_rgba(57,255,20,0.5)] w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()} // stop backdrop clicks from closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={() => {
            if (!loading) onClose();
          }}
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#39FF14] mb-4 text-center">
          Join Our {club}
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Fill out the form below and our team will reach out to you with details.
        </p>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="hidden"
            name="access_key"
            value="3de1750f-d17d-4df3-9fa8-1185f1e6f3b2"
          />
          <input type="hidden" name="subject" value={`New Lead for ${club}`} />
          <input type="hidden" name="club" value={club} />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-black border border-[#39FF14] text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-black border border-[#39FF14] text-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded-md bg-black border border-[#39FF14] text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#39FF14] text-black font-bold rounded-md hover:bg-[#2ecc71] hover:cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
