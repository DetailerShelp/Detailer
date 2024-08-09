import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { newChatActions } from "@/store/reducers/messenger/chatSlice";

const actions = {
    ...newChatActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
