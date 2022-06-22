const template = (data) => {
	`
    <div class="card" style="width: 14rem">
    <img class="card-img-top" src="./${data.photo}" all="Card Image" />
    <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${data.brand}</h6>
        <h5 class="card-subtitle mb-2 text-muted">${data.price}</h5>
    </div>
    </div>;
`;
};

$(document).ready(() => {
	$.ajax({
		url: "./필요한파일/store.json",
		dataType: "json",
		success: (data) => {
			console.log(data);
            for(let i in data) {
                
            }
		},
	});
});
