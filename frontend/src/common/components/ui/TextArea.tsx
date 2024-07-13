import { colors, mainFont, transitions } from '@/common/styles/styleConstants';
import styled from 'styled-components';
import {
    CSSProperties,
    ChangeEvent,
    KeyboardEvent,
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
    FocusEventHandler
} from 'react';

const TextAreaWrapper = styled('div') <{ isActive: boolean }>`
  width: 100%;
  padding: 15px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 30px;
  border-width: 1px; 
  border-style: solid;
  border-color: ${(props) =>
        props.isActive ? '#B8B8B8' : '#010101'};
  transition: ${transitions.mediumTransition};
  &:hover,
  &:focus {
    border-color: #b43535;
  }
  overflow: hidden;
`;

export const CustomTextArea = styled('textarea')`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  border: none;
  font-size: 18px;
  line-height: 25px !important;
  padding-inline: 5px;
  min-height: 17px !important;
  font-family: ${mainFont};
  overflow-x: hidden;
  resize: none;
  &:focus {
    box-shadow: none;
  }

  &.ant-input-disabled {
    background: none;
  }
  &::-webkit-scrollbar {
   width: 3px; /* Ширина скроллбара */
   background-color: #D9D9D9; /* Цвет ползунка скроллбара */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #010101; /* Цвет ползунка скроллбара */
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
  }
`;

interface CustomTextAreaProps {
    textAreaPlaceholder?: string;
    setText?: (text: string) => void;
    value?: string | number | readonly string[];
    onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    maxLength?: number;
    style?: CSSProperties;
    wrapperStyle?: CSSProperties;
    disabled?: boolean;
    id?: string;
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
}

const TextArea = forwardRef<HTMLTextAreaElement, CustomTextAreaProps>(
    (
        {
            textAreaPlaceholder,
            setText,
            value,
            onKeyDown,
            maxLength,
            style,
            wrapperStyle,
            disabled,
            id,
            onFocus,
        },
        ref,
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const localRef = useRef<HTMLTextAreaElement>(null);
        useImperativeHandle(ref, () => localRef.current!, []);

        const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setText?.(e.target.value);
        };

        return (
            <TextAreaWrapper
                isActive={isFocused}
                style={wrapperStyle}
                onClick={() => localRef.current?.focus()}
            >
                <CustomTextArea
                    id={id}
                    placeholder={textAreaPlaceholder}
                    onChange={handleChangeTextArea}
                    value={value}
                    onKeyDown={onKeyDown}
                    maxLength={maxLength}
                    style={style}
                    disabled={disabled}
                    onFocus={(e) => {
                        onFocus?.(e);
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    ref={localRef}
                />
            </TextAreaWrapper>
        );
    },
);

export default TextArea;
