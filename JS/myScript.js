function valaidate_form_answers(){
  var num_states = document.forms["statesForm"]["states"].value
    if (num_states == null || num_states == "")
    {
      alert("section must be filled out")
      return false;
    }
  var largest_state = document.forms["statesForm"]["largeState"].value
    if (largest_state == null || largest_state == "")
    {
      alert("section must be filled out")
      return false;
    }

  var largest_us_city = document.forms["statesForm"]["largestCity"].value
    if (largest_us_city == null || largest_us_city == "")
    {
      alert("section must be filled out")
      return false;
    }
  var largest_texas_city = document.forms["statesForm"]["texasCity"].value
    if (largest_texas_city  == null || largest_texas_city == "")
    {
      alert("section must be filled out")
      return false;
    }

  var higest_population = document.forms["statesForm"]["LargestPop"].value
    if (higest_population == null || higest_population == "")
    {
      alert("section must be filled out")
      return false;
    }







    document.getElementById("submit").innerHTML = "You have summited the form";
    return true;
}
