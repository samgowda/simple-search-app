import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/breakpoints';

interface Props {
  value: any;
  placeholder: string;
}

const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  ${media.tablet`
    font-size: 20px;
    width: 50%;
  `}
`;

const SearchInput = (props: Props) => (
  <StyledInput type="text" placeholder={props.placeholder} ref={props.value as any} />
);

export default SearchInput;
