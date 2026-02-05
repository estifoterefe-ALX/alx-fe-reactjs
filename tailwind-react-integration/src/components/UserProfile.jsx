function UserProfile() {
  return (
    <div className="bg-gray-100 max-w-xs sm:p-4 md:p-8 md:max-w-sm mx-auto my-20 border rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto"
        loading="lazy"
      />
      <h1 className="sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}
export default UserProfile;
