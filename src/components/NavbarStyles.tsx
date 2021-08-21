import { css } from "@emotion/css";

const navbarBgColor = "#060b26"

const navMenuBase = css({
    backgroundColor: navbarBgColor,
    width: "250px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: "-100%",
    transition: "850ms",
})

export const NavbarStyles = {

    navbar: css({
        backgroundColor: navbarBgColor,
        height: "80px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    }),

    menuBars: css({
        marginLeft: "2rem",
        fontSize: "2rem",
        background: "none",
    }),

    navMenu: navMenuBase,

    navMenuActive: css(navMenuBase, {
        left: 0,
        transition: "350ms"
    }),

    navText: css({
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "8px 0px 8px 16px",
        listStyle: "none",
        height: "60px",
        '& a': {
            textDecoration: "none",
            color: "#f5f5f5",
            fontSize: "18px",
            width: "95%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0px 16px",
            borderRadius: "4px",
            '&:hover': {
                backgroundColor: "#1a83ff",
            },
        },
        '& span': {
            marginLeft: "16px"
        }
    }),

    navMenuItems: css({
        width: "100%"
    }),

    navbarToggle: css({
        backgroundColor: "#060b26",
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    })
}