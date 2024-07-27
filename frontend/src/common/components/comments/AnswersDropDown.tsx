import { AnswersDropDownBtn, AnswersDropDownWrapper, AnswersWrapper } from './styles'
import { useState } from 'react';
import CommentItem from './CommentItem';
import { Answer } from './Comments';

interface AnswersDropDownProps {
  answerToComment: Answer
}

export default function AnswersDropDown({answerToComment}: AnswersDropDownProps) {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <>
      <AnswersDropDownWrapper>
        {!showAnswers && <AnswersDropDownBtn onClick={() => setShowAnswers(true)}>Посмотреть еще 2 ответа</AnswersDropDownBtn>}
        {
          showAnswers &&
          <AnswersWrapper>
            {answerToComment.comments.map((elem) => <CommentItem key={elem.id} comment={elem} />)}
          </AnswersWrapper>
        }
      </AnswersDropDownWrapper >
    </>
  )
}
