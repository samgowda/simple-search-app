import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { FaSearchengin } from 'react-icons/fa';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchGrid from '../../components/SearchGrid';
import SearchInput from '../../components/SearchInput';
import { fetchGifs } from '../../redux/gifs/actions';
import { COLORS } from '../../styles';

type PassProps = {
  history: any;
};

type DispatchProps = {
  fetchGifs: (searchQuery: any, searchOffset?: number) => void;
};

type Props = PassProps & DispatchProps;

export const SearchContainer = styled.form`
  display: flex;
  justify-content: center;
  padding: 10px;
  background: ${COLORS.GREEN}
`;

export const SearchButton = styled.button`
  align-items: center;
  background: ${COLORS.GREEN}
  border: none;
  color: ${COLORS.WHITE}
  cursor: pointer;
  display: flex;
  font-size: 25px;
  justify-content: center;
  width: 50px;
`;

const SearchPage = ({ fetchGifs, history }: Props) => {
  let searchInput: any;

  const [query, setQuery] = useState('');

  useEffect(() => {
    searchInput.focus();
    const qs = history.location.search;
    const params = queryString.parse(qs);
    const values = params.q;
    if (values) {
      fetchGifs(values);
      // @ts-ignore
      setQuery(values);
    }

  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formattedValue = searchInput.value.replace(/[^A-Z0-9]+/ig, '+');
    history.push({ search: `?q=${formattedValue}` });
    fetchGifs(searchInput.value);
    setQuery(searchInput.value);
  };

  return (
    <>
      <SearchContainer data-cy="container" onSubmit={handleSubmit}>
        <SearchInput
          value={(input: any) => (searchInput = input)}
          placeholder="Search for gifs"
          data-cy="input"
          />
        <SearchButton data-cy="submit" type="submit">
          <FaSearchengin />
        </SearchButton>
      </SearchContainer>
      <SearchGrid searchQuery={query} />
    </>
  );

};

export default connect<DispatchProps>(null, { fetchGifs })(SearchPage);
