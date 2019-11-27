$(".member-headshot").click(function(event) {
  var name = event.target.id;
  $("member-headshot").css("opacity", "0.1");
  $(`#${name}`).css("opacity", "0.5");
  var memberObject = members.filter(member => member["name"] === name)[0];
  var memberElement = $("<div>");
  var memberPic = `<img src = ${memberObject["actionShotURL"]} class = "w-50">`;
  memberElement.append(memberPic);
  var memberName = `<h3 class = "member-name-active"> ${memberObject["name"]}</h3>`;
  memberElement.append(memberName);
  $(".selected-character-content-holder").html(memberElement);
});
