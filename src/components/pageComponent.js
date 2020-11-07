import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useRouter } from "next/router";

export const PageHeader = ({ title }) => {
  const router = useRouter();
  return (
    <div className="pageHeader">
      <div onClick={() => router.back()} className="float-left">
        <ArrowBackIcon />
      </div>
      <h3 className="text-center font-weight-bold">{title}</h3>
    </div>
  );
};
