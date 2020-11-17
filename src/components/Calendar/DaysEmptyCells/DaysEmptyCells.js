import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uniqid from "uniqid";


function DaysEmptyCells({ empty }) {
   return (
      <>
         {empty.map(() => (
            <div key={uniqid()}></div>
         ))}
      </>
   );
}


DaysEmptyCells.propTypes = {
   empty: PropTypes.array
};


// find amount of empty cells before first day in month
function mapStateToProps(state) {
   const cellsContainer = [];

   // find number of first day in month
   let firstMonthDay = new Date(state.year, state.month, 1).getDay();

   // if Sunday number is 0, switch it to 7
   if (firstMonthDay === 0) {
      firstMonthDay = 7;
   }

   // empty cells are equal first month day minus one
   const emptyCells = firstMonthDay - 1;

   // create array with empty cells in month
   for (let i = 1; i <= emptyCells; i++) {
      cellsContainer.push(false);
   }
   return { empty: cellsContainer }
}


export default connect(mapStateToProps)(DaysEmptyCells);