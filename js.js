$(document).ready(function() {
  //name generator

  //race/class generator

  var racesarray = [
    "Elf",
    "Orc",
    "Human",
    "Halfling",
    "Dwarf",
    "Gnome",
    "Half-Elf",
    "Half-Orc"
  ];
  var classesarray = [
    "Rogue",
    "Bard",
    "Cleric",
    "Paladin",
    "Barbarian",
    "Ranger",
    "Wizard"
  ];

  //list the races in the racelistspan
  var racesspan = $("#racelistspan");
  for (var i = 0; i < racesarray.length; i++) {
    console.log(i);
    var listraceswithcommas = racesarray[i] + ", ";
    racesspan.append(listraceswithcommas);
  }

  //list the classes in the classlistspan
  var classesspan = $("#classlistspan");
  for (var i = 0; i < classesarray.length; i++) {
    console.log(i);
    var listclasseswithcommas = classesarray[i] + ", ";
    classesspan.append(listclasseswithcommas);
  }

  //stats generator

  var statsarray = ["STR", "WIS", "INT", "DEX", "CHA", "CON"];

  // -------------------------------------------------------
  //standin for while I'm WIPing
  $("#newcharbtn").click(function() {
    alert(
      "you sure clicked that button.  but the app isn't ready.  please wait some more."
    );
    //note: this button will eventually create a new everything
  });
});
