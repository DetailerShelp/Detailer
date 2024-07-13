import styled from "styled-components";
import { mainFont } from "../styles/styleConstants";

export const ModalPostWrapper = styled('div')`
    width: 700px;
    height: 800px;
    padding: 35px 76px;
    overflow-y: auto;
`

//Возможно переместить overflow

export const ModalPostContent = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 25px;
    overflow-x: hidden;
`

export const ModalPostHeader = styled('h1')`
    text-align: center;
    font-size: 25px;
    font-weight: 500;
`

export const DescriptionBlock = styled('h2')`
    margin: 0px 10px;
    font-size: 20px;
    font-weight: 500;
`

export const PostMediaContent = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
`