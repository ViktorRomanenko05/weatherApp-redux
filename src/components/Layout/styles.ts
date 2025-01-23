import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import rainImage from "../../assets/rain.jpeg";

export const LayoutComponent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 80px;
    background-color: rgba(18, 45, 77, 0.5); //#122D4D разложенный в rgb
    backdrop-filter: blur(18px);
    border-bottom: 1px solid #D2D2D2;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    padding: 0 85px;
`

export const LogoContainer = styled.div`
    width: 155px;
    height: 29px;
    cursor: pointer;
`

export const NavContainer = styled.nav`
    display: flex;
    gap: 63px;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 100%;
    background-image: url(${rainImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`