import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { newChatActions } from "@/store/messenger/chatSlice";
import { commentsActions } from "@/store/reducers/comments/commentsSlice";
import { newCommentActions } from "./reducers/comments/newCommentSlice";

const actions = {
    ...newCommentActions,
    ...commentsActions,
    ...newChatActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
