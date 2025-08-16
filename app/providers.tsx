"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ zIndex: 99999 }} // VERY high so toasts are always on top
        toastOptions={{
          success: {
            duration: 3500,
            style: {
              background: "#39FF14",
              color: "#000",
              boxShadow: "0 0 20px rgba(57,255,20,0.35)",
            },
          },
          error: {
            duration: 4000,
            style: {
              background: "#ff4d4d",
              color: "#fff",
            },
          },
        }}
      />
      {children}
    </>
  );
}
