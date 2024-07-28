import { AnswersDropDownBtn, AnswersDropDownWrapper, AnswersWrapper } from './styles'
import { useState } from 'react';
import CommentItem from './CommentItem';
import { useGetAnswersQuery } from '@/store/reducers/shorts/shortsApi';

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
              {data.map((elem) => <CommentItem key={elem.id} comment={elem} />)}
            </AnswersWrapper>
          }
        </AnswersDropDownWrapper >
      }
    </>
  )
}
