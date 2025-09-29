import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { authUser } = useAuthContext(); // ✅ get it from context

  return (
    <nav>
      {authUser ? (
        <span>Welcome {authUser.username}</span>
      ) : (
        <span>Please login</span>
      )}
    </nav>
  );
};

export default Navbar;
