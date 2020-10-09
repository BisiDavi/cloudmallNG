import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useRouter } from "next/router";

const AuthHeader = ({ title }) => {
  const router = useRouter();
  return (
    <div className="authHeader">
      <div onClick={() => router.back()} className="float-left">
        <ArrowBackIcon />
      </div>
      <h3 className="text-center">{title}</h3>
    </div>
  );
};

export default AuthHeader;
