import { ThunkAction } from "redux-thunk";

import { RootState } from "@/state";
import { navigateUp as up } from "@/utils";

import {
    currentNavigationKeySelector,
    recieveCurrentNavigationKey,
    RecieveCurrentNavigationKeyAction,
} from "./";

export const navigateUp = (): ThunkAction<
    void,
    RootState,
    null,
    RecieveCurrentNavigationKeyAction
> => {
    return (dispatch, getState) => {
        let key = currentNavigationKeySelector(getState());

        key = up(key);

        dispatch(recieveCurrentNavigationKey(key));
    };
};
