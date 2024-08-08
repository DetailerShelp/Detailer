import { AnswersDropDownBtn, AnswersDropDownWrapper, AnswersWrapper } from '@/common/components/comments/styles'
import { useState } from 'react';
import CommentItem from '@/common/components/comments/CommentItem';
import { useGetAnswersQuery } from '@/store/reducers/comments/commentsApi';

// ToDo
interface AnswersDropDownProps {
  parentId: number
}

export default function AnswersDropDown({ parentId }: AnswersDropDownProps) {
  const [showAnswers, setShowAnswers] = useState(false);
  const { data } = useGetAnswersQuery(parentId);

  return (
    <>
      {data &&
        <AnswersDropDownWrapper>
          {!showAnswers && <AnswersDropDownBtn onClick={() => setShowAnswers(true)}>Посмотреть еще {data.length} ответа</AnswersDropDownBtn>}
          {
            showAnswers &&
            <AnswersWrapper>
              {data.map((elem) => <CommentItem key={elem.id} isAnswer={true} comment={elem} />)}
            </AnswersWrapper>
          }
        </AnswersDropDownWrapper >
      }
    </>
  )
}
