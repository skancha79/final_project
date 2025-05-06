import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center mt-16">
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;