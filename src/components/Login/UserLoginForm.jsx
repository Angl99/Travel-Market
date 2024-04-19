import React from "react";

function UserLoginForm() {
  return (
    <form>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input id="username" type="text" placeholder="Username" />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="*******************"
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit">Sign In</button>
      </div>
    </form>
  );
}

export default UserLoginForm;
