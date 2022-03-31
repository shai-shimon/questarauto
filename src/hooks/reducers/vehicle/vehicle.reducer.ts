import { vehicleAction } from "./vehicle.action";

export const vehicleReducer = (state: any, action: any) => {
    switch (action.type) {
        case vehicleAction.byDate: {
            state = action.data
            return state;
        }
    }
}
export const pointsReducer = (state: any, action: any) => {
    switch (action.type) {
        case vehicleAction.points: {
            state = action.points
            return state;
        }
    }
}