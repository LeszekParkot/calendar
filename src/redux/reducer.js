const date = new Date();


const initialState = {
   day: date.getDate(),
   month: date.getMonth(),
   year: date.getFullYear(),
   monthsNames: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]
};


function reducer(state = initialState, action) {
   switch (action.type) {
   case "NEXT_MONTH":
      if (state.month === 11) {
         return {
            ...state,
            month: state.month = 0,
            year: state.year + 1,
         };
      } else {
         return {
            ...state,
            month: state.month + 1
         };
      }
   case "PREV_MONTH":
      if (state.month === 0) {
         return {
            ...state,
            month: state.month = 11,
            year: state.year - 1
         };
      } else {
         return {
            ...state,
            month: state.month - 1
         };
      }
   default:
      return state;
   }
}

export default reducer;