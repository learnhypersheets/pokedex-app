/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import NavMenu from "components/nav-menu";
import TopBar from "components/top-bar";

const Container: React.FC = ({ children }) => {
  const containerStyle = css({
    maxWidth: 414,
    margin: "0 auto",
    padding: "56px 0 80px",
  });

  return (
    <div css={containerStyle}>
      <TopBar />
      {children}
      <NavMenu />
    </div>
  );
};

export default Container;
