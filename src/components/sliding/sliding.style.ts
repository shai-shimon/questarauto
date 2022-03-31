import { appProps } from "../../props";

const drawerStyle = {
    width: appProps.drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: appProps.drawerWidth,
        boxSizing: 'border-box',
    },
}
const boxStyle = { display: 'flex' }

export { drawerStyle, boxStyle }