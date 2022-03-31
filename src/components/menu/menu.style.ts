import { appProps } from "../../props"

const iconStyle = { mr: 2, display: { sm: 'none' } }
const drawerStyle = {
    display: { xs: "none", sm: "block" },
    "& .MuiDrawer-paper": {
        boxSizing: "border-box",
        width: appProps.drawerWidth,
    },
}
const boxStyle = { width: { sm: appProps.drawerWidth }, flexShrink: { sm: 0 } }
export { iconStyle, drawerStyle, boxStyle }