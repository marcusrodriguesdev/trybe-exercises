function changeDate() {
  const date = document.getElementById('date');
  var date1 = new Date();
  var day = date1.getDate(),
      month = date1.getMonth() + 1,
      year = date1.getFullYear();

  if (date1 === day < 01) {
    alert('Data inexistente!');
  } else if (date1 === month < 01 || month > 12) {
    alert('Data inexistente!');
  } else if (date1 === year > 2021) {
    alert('Data inexistente!');
  }
}
