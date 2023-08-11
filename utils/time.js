function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return year + "/" + month + "/" + day ;
  }
  function thisYear(date) {
    var theyear = date.getFullYear()
    return theyear ;
  }
  const formatDay = dates => {
    let _day = new Array(' Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    let date = new Date(dates);
    date.setDate(date.getDate());
    let day = date.getDay();
    return _day[day];
  }
  const formatSole = () => {
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let text = ``;
    if (hours >= 0 && hours <= 6) {
      text = `EVENING ,深夜了,不要熬夜太久哟`;
    } else if (hours > 6 && hours <= 8) {
      text = `MORNING`;
    } else if (hours > 8 && hours <= 10) {
      text = `MORNING`;
    } else if (hours > 10 && hours <= 13) {
      text = `NOON`;
    } else if (hours > 13 && hours <= 17) {
      text = `AFTERNOON`;
    } else if (hours > 17 && hours <= 23) {
      text = `EVENING`;
    }
    return text;
  }
  module.exports = {
    formatTime: formatTime,
    formatDay: formatDay,
    formatSole: formatSole,
    thisYear:thisYear
  }