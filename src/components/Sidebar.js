import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon icon={faHome} style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
            <FontAwesomeIcon icon={faMicrophoneAlt} style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>En Vivo</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Directo</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
};

export default Sidebar;