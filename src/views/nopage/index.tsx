import { FC } from "react";
import { useRouteError } from "react-router-dom";

const NoPage: FC = () => {
  const error = useRouteError() as Error;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
};

export default NoPage;
