$(".member-headshot").click(function(event) {
  var name = event.target.id;
  $(".member-headshot").css("opacity", ".1");
  $(`#${name}`).css("opacity", "0.8");
  $(".member-headshot").addClass("inactive-member");
  var memberObject = members.filter(member => member["name"] === name)[0];
  var memberElement = $(".selected-character-content-holder");
  memberElement.html("");
  var memberName = `<div class = "row"> <div class="col-12 d-flex justify-content-center"><h3 class = "member-name-active"> ${memberObject["name"]}</h3> </div></div>`;
  memberElement.append(memberName);

  var memberInstruments = `<div class = "row"> <div class="col-12 d-flex justify-content-center"><h3 class = "member-instrument-active"> Instruments: ${memberObject["instrument"]}</h3> </div></div>`;
  memberElement.append(memberInstruments);
  var memberPic = `<div class = "row"> <div class="col-12 d-flex justify-content-center"> <img src = ${memberObject["actionShotURL"]} class = "w-50"> </div> </div>`;
  memberElement.append(memberPic);
});
