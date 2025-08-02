$(function () {
  $("#result").click(dragonBall);
});

function dragonBall() {
  alert("되냐?");
}

/*
function dragonBall(){
    $.get("https://dragonball-api.com/api/characters")
    .done(function(data){
        const ball = data.items.id;
        console.log("ball : ",ball)

        $("#result").html(
                    `
                <img src="${ball.image}"/>
                <div class="Names">
                    <strong>${ball.name}</strong>
                    <strong>${ball.race}</strong>
                </div>
                `
            )
      
    });

}
*/
