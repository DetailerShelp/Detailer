import { borders, colors, fonts, mainFont, transitions } from '@/common/styles/styleConstants';
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
import { clampText, scrollBar } from '@/common/styles/mixins';

const TextAreaWrapper = styled('div') <{ isActive: boolean }>`
  width: 100%;
  padding: 15px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: ${borders.defaultBorderRadius};
  border-width: 2px; 
  border-style: solid;
  border-color: ${(props) =>
        props.isActive ? colors.grayAccent : colors.grayBorder};
  transition: ${transitions.mediumTransition};
  &:hover,
  &:focus {
    border-color: ${colors.grayText};
  }
  overflow: hidden;
`;

export const CustomTextArea = styled('textarea')`
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${colors.blackTotal};
  font-size: ${clampText(fonts.sizes.main, fonts.sizes.mainMobile)};
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

  ${scrollBar}

  &::-webkit-scrollbar {
   width: 3px; 
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
