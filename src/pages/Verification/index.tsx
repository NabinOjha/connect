import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { verifySignUp } from "@/services/api/auth";
import { USER } from "@/lib/utils";

const Verification = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  if (!token) return <div>Auth Verification failed: No token provided</div>;

  const { data, isSuccess, isError } = useQuery({
    queryKey: ["verifyAuth", token],
    queryFn: () => verifySignUp(token),
  });

  useEffect(() => {
    if (isSuccess) {
      if (data.role === USER) {
        navigate("/dashboard");
      } else {
        navigate("/contractor/dashboard");
      }
    }
  }, [isSuccess, navigate]);

  if (isError) return <div>Verification failed</div>;

  return null;
};

export default Verification;
