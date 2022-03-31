import {
    Box,
    Drawer,
    Stack,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Toolbar,
} from "@mui/material";
import { FC, useContext } from "react";
import { AppContext, vehicleAction } from "../../hooks";
import { getVehicleByDate } from "../../requests";
import { boxStyle, drawerStyle, iconStyle } from "./menu.style";
import { GiPriceTag } from 'react-icons/gi'

const logoSrc: string = "https://questarauto.com/wp-content/themes/quester/images/questar_logo.png";

const Menu: FC = () => {

    const { vehiclesId, setVehicles, setPoints } = useContext<any>(AppContext);

    const getInfo = (id: string) => {
        getVehicleByDate(Number(id))
            .then((res: any) => {
                setVehicles({
                    type: vehicleAction.byDate,
                    data: res
                })
                setPoints({
                    type: vehicleAction.points,
                    points: res.data[0].points
                });

            })
    }

    return (
        <Box
            component="nav"
            sx={boxStyle}
            aria-label="mailbox folders" >

            <Drawer
                variant="permanent"
                sx={drawerStyle}
                open
            >
                <Stack gap={2} padding={2}>
                    <Toolbar>
                        <img src={logoSrc} />
                    </Toolbar>
                    <Divider />
                    <List>
                        {vehiclesId?.map((type: any) => {
                            return (
                                <>
                                    <ListItem
                                        button
                                        key={type}
                                        onClick={() => {
                                            getInfo(type)
                                        }}>
                                        <ListItemIcon><GiPriceTag color="#deca62" /></ListItemIcon>
                                        <ListItemText primary={type} />
                                    </ListItem>
                                    <Divider />
                                </>
                            );
                        })}
                    </List>
                </Stack>
            </Drawer>
        </Box>
    );
};
export { Menu };
