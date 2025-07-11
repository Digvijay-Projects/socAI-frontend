"use client"; // Required at the top for any component using React hooks

import React, { useState, ChangeEvent, FormEvent } from "react";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type.startsWith("video/")) {
        setFile(selectedFile);
        setMessage("");
      } else {
        setFile(null);
        setMessage("Please select a video file (e.g., .mp4, .mov).");
      }
    } else {
      setFile(null);
      setMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      setMessage("Please select a file to upload first.");
      return;
    }

    setIsLoading(true);
    setMessage("Uploading...");

    // Simulated upload
    setTimeout(() => {
      setIsLoading(false);
      setMessage(`Successfully selected video: ${file.name}`);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto"
    >
      <div className="mb-4">
        <label
          htmlFor="video-upload"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Select Video File:
        </label>
        <input
          type="file"
          id="video-upload"
          accept="video/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100"
        />
      </div>

      {file && (
        <p className="text-sm text-gray-600 mb-4">
          Selected: <span className="font-semibold">{file.name}</span> (
          {(file.size / 1024 / 1024).toFixed(2)} MB)
        </p>
      )}

      {message && (
        <p
          className={`text-sm mb-4 ${
            message.includes("Error") || message.includes("failed")
              ? "text-red-500"
              : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={!file || isLoading}
        className={`w-full py-2 px-4 rounded-md text-white font-semibold transition duration-300
          ${
            !file || isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          }`}
      >
        {isLoading ? "Uploading..." : "Upload Video"}
      </button>
    </form>
  );
}