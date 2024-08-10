import { AnswersDropDownBtn, AnswersDropDownWrapper, AnswersWrapper } from '@/common/components/comments/styles'
import { useState } from 'react';
import { useGetAnswersQuery } from '@/store/reducers/comments/commentsApi';
import Answers from './Answers';

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
          {!showAnswers && <AnswersDropDownBtn onClick={() => setShowAnswers(true)}>Посмотреть еще {data.length}</AnswersDropDownBtn>}
          {
            showAnswers &&
            <AnswersWrapper>
              <Answers answers={data} />
            </AnswersWrapper>
          }
        </AnswersDropDownWrapper >
      }
    </>
  )
}
