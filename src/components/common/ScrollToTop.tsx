import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

const ScrollToTop: React.FC<RouteComponentProps> = ({
  children,
  location: { pathname },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
