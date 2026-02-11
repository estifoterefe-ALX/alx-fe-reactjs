import { User, Facebook, Linkedin, Twitter, Github } from "lucide-react";
import { useState, useRef } from "react";
function Profile() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className="mx-auto flex flex-col border border-gray-200 bg-gray-100 w-50 rounded py-5 hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />

      {image ? (
        <img
          src={image}
          className="w-17 h-17 rounded-full object-cover mx-auto"
        />
      ) : (
        <User
          className="w-17 h-17 fill-gray-950 cursor-pointer mx-auto dark:fill-gray-50"
          onClick={() => fileInputRef.current?.click()}
        />
      )}

      <input
        className="font-extrabold text-md text-center focus:outline-none dark:text-gray-50"
        defaultValue="Your Name Here"
      />
      <input
        className="text-xs text-gray-400 text-center focus:outline-none dark:text-gray-400"
        defaultValue="Software Engineer"
      />
      <div className="flex  justify-evenly pt-2">
        <Github className="border rounded-full bg-gray-900 fill-amber-50 w-8 h-8 dark:fill-amber-50 dark:bg-amber-50" />
        <Linkedin className="border rounded bg-gray-900 fill-amber-50 w-8 h-8 dark:fill-amber-50 dark:bg-amber-50" />
        <Facebook className="border rounded-full bg-gray-900 fill-amber-50 w-8 h-8 dark:fill-amber-50 dark:bg-amber-50" />
        <Twitter className="border rounded-full bg-gray-900 fill-amber-50 w-8 h-8 dark:fill-amber-50 dark:bg-amber-50" />
      </div>
    </div>
  );
}
export default Profile;
