import {useNavigate} from "react-router-dom";

import { Header, LogoContainer, NavContainer, Main, StyledNavLink, LayoutComponent } from "./styles";
import { LayoutProps } from "./types";

function Layout ({ children }: LayoutProps) {
    const navigate = useNavigate();

    return(
        <LayoutComponent>
            <Main>
            <Header>
                <LogoContainer onClick={()=> navigate("/")}>Weather App</LogoContainer>
                <NavContainer>
                    <StyledNavLink to = "/" style={({ isActive }) => ({ fontWeight: isActive ? '700' : '400' })}>Home</StyledNavLink>
                    <StyledNavLink to = "/history" style={({ isActive }) => ({ fontWeight: isActive ? '700' : '400' })}>History</StyledNavLink>
                </NavContainer>
            </Header>
                { children }
            </Main>
        </LayoutComponent>
    )
}

export default Layout;