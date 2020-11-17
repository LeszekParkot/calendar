import React from "react";
import BtnSwitch from "components/Calendar/BtnSwitch/BtnSwitch";
import DaysEmptyCells from "components/Calendar/DaysEmptyCells/DaysEmptyCells";
import DaysNumbered from "components/Calendar/DaysNumbered/DaysNumbered";
import Month from "components/Calendar/Month/Month";
import Year from "components/Calendar/Year/Year";
import {navWrapper, daysWrapper, dateLabel} from "./Calendar.module.scss";


function Calendar() {

   return (
      <div className="container">
         <div className={navWrapper}>
            <BtnSwitch next>
               Next
            </BtnSwitch>

            <div className={dateLabel}>
               <Year />
               <Month />
            </div>


            <BtnSwitch prev>
               Prev
            </BtnSwitch>
         </div>

         <div className={daysWrapper}>
            <DaysEmptyCells />
            <DaysNumbered />
         </div>
      </div>
   );
}


export default Calendar;