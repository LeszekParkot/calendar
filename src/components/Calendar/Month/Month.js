import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Month({ monthNumber, monthsNames }) {
   return (
      <div>
         {monthsNames[monthNumber]}
      </div>
   );
}

Month.propTypes = {
   monthNumber: PropTypes.number.isRequired,
   monthsNames: PropTypes.arrayOf(PropTypes.string,).isRequired
}


function mapStateToProps(state) {
   return {
      monthNumber: state.month,
      monthsNames: state.monthsNames
   }
}


export default connect(mapStateToProps)(Month);