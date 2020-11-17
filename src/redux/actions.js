function nextMonth() {
   return {
      type: "NEXT_MONTH"
   }
}

function prevMonth() {
   return {
      type: "PREV_MONTH"
   }
}


export default { nextMonth, prevMonth };