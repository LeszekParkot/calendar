import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "redux/actions";


function BtnSwitch({ goNext, goPrev, next, prev, children }) {
   if (next) {
      return (
         <>
            <button onClick={goNext}>
               {children}
            </button>
         </>
      );
   } else if (prev) {
      return (
         <>
            <button onClick={goPrev}>
               {children}
            </button>
         </>
      );
   }

}


BtnSwitch.propTypes = {
   goNext: PropTypes.func.isRequired,
   goPrev: PropTypes.func.isRequired,
   next: PropTypes.bool,
   prev: PropTypes.bool,
   children: PropTypes.node,
};


function mapDispatchToProps(dispatch) {
   return {
      goNext: () => {
         dispatch(actions.nextMonth())
      },
      goPrev: () => {
         dispatch(actions.prevMonth())
      }
   }
}


export default connect(null, mapDispatchToProps)(BtnSwitch);