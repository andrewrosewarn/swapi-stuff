import { useRouteError } from "react-router-dom";

export function DetailError() {
  const error = useRouteError();

  return (
    <div>
      Detail Error
      <p>{error.message}</p>
    </div>
  );
}
