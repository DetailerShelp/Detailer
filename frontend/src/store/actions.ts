import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { newChatActions } from "@/store/messenger/chatSlice";

const actions = {
    ...newChatActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
