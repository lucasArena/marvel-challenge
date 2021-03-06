import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import {
  Container,
  SearchBar,
  Pagination,
  PreviousPage,
  ForwardPage,
} from './styles';

import Loading from '~/components/Loading';

export default function DashboardView({
  children,
  handlePaginate,
  handleFilter,
  loading,
  total,
}) {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);

  function handleFilterCharacter(value) {
    setFilter(value);
    setPage(0);
    setFirstPage(true);
    handleFilter(filter);
  }

  function validateLastPage() {
    if (total <= (page + 1) * 5) {
      setLastPage(true);
    } else {
      setLastPage(false);
    }
  }

  function handlePaginationPrevious() {
    if (page === 1) {
      setFirstPage(true);
      setPage(page - 1);
      handlePaginate(page - 1, filter);
      return;
    }
    setLastPage(false);
    setPage(page - 1);
    handlePaginate(page - 1, filter);
  }

  function handlePaginationForward() {
    setPage(page + 1);
    setFirstPage(false);
    handlePaginate(page + 1, filter);
    validateLastPage();
  }

  useEffect(() => {
    handleFilterCharacter(filter);
    // eslint-disable-next-line
  }, [filter]);

  useEffect(() => {
    validateLastPage();
    // eslint-disable-next-line
  }, [total, page]);

  return (
    <Container>
      <SearchBar>
        <input
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          placeholder="Digite seu herói..."
        />
      </SearchBar>
      {children}
      <Pagination>
        <PreviousPage
          type="button"
          onClick={handlePaginationPrevious}
          firstPage={firstPage}
        >
          <FaArrowLeft color="#FFF" size={30} />
        </PreviousPage>
        <span>{loading ? <Loading color="#ed4325" /> : page + 1}</span>
        <ForwardPage
          type="button"
          onClick={handlePaginationForward}
          lastPage={lastPage}
        >
          <FaArrowRight color="#FFF" size={30} />
        </ForwardPage>
      </Pagination>
    </Container>
  );
}

DashboardView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  handlePaginate: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  total: PropTypes.number,
};

DashboardView.defaultProps = {
  loading: false,
  total: 0,
};
