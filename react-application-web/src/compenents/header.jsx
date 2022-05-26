import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={ showAdd? 'green':'red'} text={showAdd?'close': 'add'} onClick={onAdd} />
    </header>
  );
};
header.defaultProps = {
    title:'Task Tracker',
}

header.prototypes = {
      title: PropTypes.string.isRequired,

}

export default header
