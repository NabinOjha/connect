import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { verifySignUp } from "@/services/api/auth";

const Verification = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  if (!token) {
    return <div>Auth Verification failed: No token provided</div>;
  }

  const { isLoading, isSuccess, isError } = useQuery({
    queryKey: ["verifyAuth", token],
    queryFn: () => verifySignUp(token),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Verification failed</div>;
  if (isSuccess) {
    navigate("/dashboard");
    return null;
  }
};

export default Verification;
