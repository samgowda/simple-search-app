import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GifState } from '../../redux/gifs/reducers';
import { LAYOUT } from '../../styles';
import { media } from '../../styles/breakpoints';

interface ReduxState {
  gifs: GifState;
}

interface ReduxProps {
  gifs: string[];
}

const FavoritesContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #F0C27B;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4B1248, #F0C27B);
  background: linear-gradient(to right, #4B1248, #F0C27B);
  height: 100vh;
  padding-top: 10px;
  ${media.tabletXLarge`
    min-height: 100vh;
    height: 100%;
  `}
`;

const ImageContainer = styled.div`
  width: 50%;
  ${media.tabletXLarge`
    width: 33.3%;
  `}

  ${media.desktopLarge`
    width: 25%;
  `}
`;

const Image = styled.img`
  width: 100% !important;
  height: auto !important;
  padding: 0 ${LAYOUT.MOBILE_GUTTER}px;
`;

const FavoritesPage = (props: ReduxProps) => {
  return (
    <FavoritesContainer>
      {props.gifs.map((id: string, index: number) => (
        <ImageContainer key={`favorites-image-${index}`}>
          <Image src={`https://i.giphy.com/media/${id}/giphy.webp`} />
        </ImageContainer>
      ))}
    </FavoritesContainer>
  );
};

const mapStateToProps = ({ gifs }: ReduxState) => {
  return { gifs: gifs.favorites };
};

export default connect(mapStateToProps)(FavoritesPage);
