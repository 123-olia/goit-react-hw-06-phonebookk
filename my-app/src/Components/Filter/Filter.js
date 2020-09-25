import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <section className={styles.section}>
      <label className={styles.label}>
        Find contacts by name:
        <br />
        <input
          onChange={(e) => onChangeFilter(e.target.value)}
          value={filter}
          name="filter"
          type="text"
          className={styles.input}
        />
      </label>
    </section>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.handleChangeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
