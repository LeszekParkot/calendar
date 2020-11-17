import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uniqid from "uniqid";
import { day } from "./DaysNumbered.module.scss";


function DaysNumbered({ daysAmount }) {
   return (
      <>
         {daysAmount.map((item) => (
            <div
               className={day}
               key={uniqid()}>
               {item.number}
            </div>
         ))}
      </>
   )
}


DaysNumbered.propTypes = {
   daysAmount: PropTypes.array
};


// find amount of days in month
function mapStateToProps(state) {
   const cellsContainer = [];

   // genetate amount of days
   const daysAmount = new Date(state.day, state.month + 1, 0).getDate();

   // create array with days numbers
   for (let i = 1; i <= daysAmount; i++) {
      cellsContainer.push({ number: i });
   }
   return { daysAmount: cellsContainer };
}


export default connect(mapStateToProps)(DaysNumbered);
