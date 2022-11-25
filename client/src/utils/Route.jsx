import { Suspense } from "react";
import { Route } from "react-router-dom";
import { Container } from "components/atoms/Container/Container";
import { LoadingIndicator } from "components/atoms/LoadingIndicator/LoadingIndicator";

export const SuspenseRoute = ({ path, element }) => {

  return (
    <Route path={path} element={
      <Suspense fallback={<Container><LoadingIndicator center={true} /></Container>}>
        {element}
      </Suspense>
    } />
  );
};