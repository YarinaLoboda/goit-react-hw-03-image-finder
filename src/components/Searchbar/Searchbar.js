import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderSearchbar = styled.header`
   {
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 20px;
  }
`;

const SearchForm = styled.form`
   {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }
`;
const SearchFormButton = styled.button`
   {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(https://img.icons8.com/material-outlined/24/000000/search--v1.png);
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }
  &: hover {
    opacity: 1;
  }
`;

const SearchFormButtonLabel = styled.span`
   {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;

const SearchFormInput = styled.input`
   {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  & :placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ querry: evt.currentTarget.elements.querry.value });
    this.setState({ value: '' });
  };

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.handleFormSubmit}>
          <SearchFormButton>
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="querry"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
