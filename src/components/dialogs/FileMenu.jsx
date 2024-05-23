import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchor }) => {
  return (
    <Menu anchorEl={anchor} open={false}>
      <div style={{ width: "10rem" }}>
        The issue here is that the FileMenu component is being rendered with the
        open prop always set to true, and the state to control the opening and
        closing of the menu is missing.
      </div>
    </Menu>
  );
};

export default FileMenu;
