import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleToFavorites } from '../../redux/gifs/actions';
import { LAYOUT } from '../../styles';
import { media } from '../../styles/breakpoints';
import HeartIcon from '../HeartIcon';

interface PassProps {
  id: string;
  isFavorite: boolean;
}

interface DispatchProps {
  toggleToFavorites: (e: any, isFavorite: boolean) => void;
}

type Props = PassProps & DispatchProps;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  svg {
    cursor: pointer;
    margin-left: 10px;
  }
  ${media.tabletXLarge`
    width: 33.3%;
  `}

  ${media.desktopLarge`
    width: 25%;
  `}
`;

const Image = styled.img`
  cursor: pointer;
  width: 100% !important;
  height: auto !important;
  padding: 0 ${LAYOUT.MOBILE_GUTTER}px;
`;

const GifCard = ({ id, isFavorite, toggleToFavorites }: Props) => {
  return (
    <ImageContainer>
      <Image
        id={id}
        onClick={e => toggleToFavorites(e.currentTarget.id, isFavorite)}
        src={`https://i.giphy.com/media/${id}/giphy.webp`}
        alt="fun image"
      />
      <HeartIcon isFavorite={isFavorite} />
    </ImageContainer>
  );
};

export default connect<null, DispatchProps, PassProps>(null, { toggleToFavorites })(GifCard);
