import { useNavigate } from "react-router-dom";
import Container from "../Container";
import { useEffect } from "react";
import LogOut from "./LogOut";

const ProfilePage = () => {
      // Token Checked
      const navigate = useNavigate();
      const token = localStorage.getItem("token")

      useEffect(() => {
            if (!token) {
                  navigate("/")
            }
      }, [token])

      return (
            <div className="py-10">
                  <Container>
                        <h1 className="text-2xl text-gray-700 tracking-wide mb-4 uppercase underline underline-offset-4">Profile Page</h1>
                        <LogOut />
                  </Container>
            </div>
      );
};

export default ProfilePage;