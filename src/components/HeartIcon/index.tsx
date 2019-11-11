import React from 'react';
import { FaHeart } from 'react-icons/fa/';
import styled from 'styled-components';
import { COLORS, ORDER } from '../../styles';

type PassProps = {
  isFavorite: boolean;
};

const IconContainer = styled.span`
  position: absolute;
  z-index: ${ORDER.ICON};
  top: 0px;
  left: 0px;
  margin: 20px;
  font-size: 16px;
  color: ${(props: PassProps) => (props.isFavorite ? `${COLORS.RED}` : `${COLORS.GRAY}`)}
`;

const HeartIcon = ({ isFavorite }: PassProps) => (
  <IconContainer isFavorite={isFavorite}>
    <FaHeart />
  </IconContainer>
);

export default HeartIcon;
