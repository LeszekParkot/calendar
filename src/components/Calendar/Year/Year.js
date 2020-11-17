import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


function Year({year}) {
   return (
      <div>
         {year}
      </div>
   );
}


function mapStateToProps(state) {
   return {
      year: state.year
   }
}


Year.propTypes = {
   year: PropTypes.number.isRequired
}


export default connect(mapStateToProps)(Year);