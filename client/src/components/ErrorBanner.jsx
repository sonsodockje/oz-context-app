import React from "react";

const ErrorBanner = ({ message }) => {
  let errorMessage = message || "에러입니다. ";
  return (
    <div
      data-testid="error-banner"
      style={{ backgroundColor: "red", color: "white", textAlign: "center" }}
    >
      {errorMessage}
    </div>
  );
};

export default ErrorBanner;
