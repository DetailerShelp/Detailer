import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { newChatActions } from "@/store/messenger/chatSlice";
import { commentsActions } from "@/store/reducers/comments/commentsSlice";
import { answerWhomActions } from "@/store/reducers/comments/answerWhomSlice";

const actions = {
    ...answerWhomActions,
    ...commentsActions,
    ...newChatActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
