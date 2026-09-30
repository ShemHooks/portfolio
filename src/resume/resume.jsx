import cv from "../assets/cv.pdf";

export default function Resume() {
  return (
    <iframe
      src={cv}
      title="Shem Mayo Regidor Resume"
      className="block w-full h-screen border-0"
    />
  );
}
