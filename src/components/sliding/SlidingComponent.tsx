import { Box, Toolbar, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FC, useContext } from 'react';
import { AppContext } from '../../hooks';
import { FaRoute } from 'react-icons/fa';
import { drawerStyle, boxStyle } from './sliding.style';
import { Point } from '../../interfaces';
import { vehicleAction } from '../../hooks';

const Sliding: FC = () => {

    const { vehicles, setPoints } = useContext<any>(AppContext);

    const drawPoints = (points: Point[]) => {
        setPoints({
            type: vehicleAction.points,
            points: points
        })

    }
    return (
        <Box sx={boxStyle}>
            <Drawer
                sx={drawerStyle}
                variant="permanent"
                anchor="right"
            >
                <Toolbar />
                <Divider />
                <List>
                    {vehicles?.data?.map((data: any) => (
                        <>
                            <ListItem button key={data.date}
                                onClick={() => {
                                    drawPoints(data.points)
                                }}>
                                <ListItemIcon>
                                    <FaRoute color='#1fb5ff' />
                                </ListItemIcon>
                                <ListItemText primary={data.date! + " - " + data.distance!} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
            </Drawer>
        </Box>)
}
export { Sliding }