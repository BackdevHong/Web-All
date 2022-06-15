const button = $(".tab-button");
const content = $(".tab-content");

// for (let i = 0; i < content.length; i++) {
// 	button.eq(i).click(() => {
// 		TabOpen(i);
// 	});
// }

$(".list").click((e) => {
	TabOpen(e.target.dataset.id);
});

function TabOpen(i) {
	content.removeClass("show");
	content.eq(i).addClass("show");
	button.removeClass("orange");
	button.eq(i).addClass("orange");
}
