let 현재페이지 = 1;
$(function () {
  $("#btn").click(function () {
    dbInfo(1);
  });

  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      현재페이지--;
      dbInfo(현재페이지);
    } else {
      alert("첫 번째 페이지 입니다.");
    }
  });

  $("#nextBtn").click(function () {
    현재페이지++;
    dbInfo(현재페이지);
  });
});

function range(start, end) {
  return [...Array(end - start + 1).keys()].map((i) => i + start);
}

function dbInfo(page) {
  const startDb = (page - 1) * 3 + 1;
  const dbs = range(startDb, startDb + 2);

  $("#result").html("");

  $("#pageInfo").html(`페이지${page}`);

  dbs.map((i) => {
    $.get(`https://dragonball-api.com/api/characters/${i}`).done(function (
      data
    ) {
      $("#result").html(
        $("#result").html() +
          `
                    <div class="container">
                        <div class="imgInfo">
                            <img src="${data.image}" alt="${data.name}" class="image" onclick="showFullImage('${data.image}')"/>
                            <div class="user"><strong>이름 : ${data.name}</strong></div>
                            <div class="user"><strong>종족 : ${data.race}</strong></div>
                       </div>
                     </div>
        `
      );
    });
  });
}

function showFullImage(imageUrl) {
  $("#result")
    .prepend(
      `
        <div id="images" class="fullImage" onclick="closeFullImage()">
          <img src="${imageUrl}" class="db-detail-show"/>
          </div>
        `
    )
    .join();
}

function closeFullImage() {
  $("#images").remove();
}
