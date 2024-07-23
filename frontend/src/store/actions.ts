import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThemeActions } from "@/store/reducers/themeSlice";

const actions = {
    ...ThemeActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
