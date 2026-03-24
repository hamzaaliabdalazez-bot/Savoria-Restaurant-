"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Savoria. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">Experience Art on a Plate</p>
      </div>
    </footer>
  );
}
