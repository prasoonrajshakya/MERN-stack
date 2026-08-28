import React from "react";

const RateLimited = () => {
  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-neutral-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
        <svg
          className="h-10 w-10 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        <div className="flex-1">
          <h2 className="text-lg font-bold">Too many requests</h2>
          <p className="text-sm">
            You've hit the rate limit. Please wait a moment before trying again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimited;
