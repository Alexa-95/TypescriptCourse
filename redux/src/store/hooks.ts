import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import {AppDispatch, RootState} from "./store";

type DisplatchFunction = () => AppDispatch;

export const useCartDispatch: DisplatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector