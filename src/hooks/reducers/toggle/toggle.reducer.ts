import { toggleAction } from './toggle.action';
export const toggleReducer = (state: any, action: any) => {

    switch (action.type) {
        case toggleAction.drawer: {
            state.toggle.drawer = !state.toggle.drawer;
            console.log(state.toggle);
            return {
                toggle: state.toggle
            }
        }
    }
}