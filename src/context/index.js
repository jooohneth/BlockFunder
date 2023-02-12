import moment from "moment";
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  getFundingModal: "scale-0",
  editModal: "scale-0",
  fundModal: "scale-0",
  deleteModal: "scale-0",
  active: 0,
  connectedAccount: "",
  projects: [],
  stats: null,

  /* 
  project: null,
  backers: [],
  */
});

const format = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    let start = text.substring(0, startChars);
    let end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

const timeLeft = (days) => {
  const todaysdate = moment();
  days = Number((days + "000").slice(0));
  days = moment(days).format("YYYY-MM-DD");
  days = moment(days);
  days = days.diff(todaysdate, "days");
  return days == 1 ? "1 day" : days + " days";
};

export { useGlobalState, setGlobalState, getGlobalState, format, timeLeft };
