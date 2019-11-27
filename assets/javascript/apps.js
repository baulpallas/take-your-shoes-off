$(".member-headshot").click(function(event) {
  var name = event.target.id;
  $(".member-headshot").css("opacity", ".2");
  $(`#${name}`).css("opacity", "0.9");
  $(".member-headshot").addClass("inactive-member");
  $(`#${name}`).removeClass("inactive-member");
  var memberObject = members.filter(member => member["name"] === name)[0];
  var memberElement = $(".selected-character-content-holder");
  memberElement.html("");
  var memberName = `<div class = "row"> <div class="col-12 d-flex justify-content-center"><h3 class = "member-name-active"> ${memberObject["name"]}</h3> </div></div>`;
  memberElement.append(memberName);

  var memberInstruments = `<div class = "row"> <div class="col-12 d-flex justify-content-center"><h3 class = "member-instrument-active"> Instruments: ${memberObject["instrument"]}</h3> </div></div>`;
  memberElement.append(memberInstruments);
  var memberPic = `<div class = "row"> <div class="col-12 d-flex justify-content-center"> <img src = ${memberObject["actionShotURL"]} class = "member-image-active w-75"> </div> </div>`;
  memberElement.append(memberPic);
  var memberBio = `<div class = "row"> <div class="col-12 mt-3 d-flex justify-content-center"><p class = "text-center member-bio-active">${memberObject["bio"]}</p> </div></div>`;
  memberElement.append(memberBio);
});
