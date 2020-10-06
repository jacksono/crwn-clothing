import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles.jsx";

const WithSpinner = WrappedComponent => props => {
  const { isLoading, ...otherprops } = props;
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherprops} />
  );
};

export default WithSpinner;
