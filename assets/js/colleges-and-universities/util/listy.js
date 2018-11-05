
let options = {
  valueNames: [ 'PSC Name', '% of Total', 'Investment Amount', 'Count of Awards'],
};

let tableList = new List('tableID', options);

$('.jPaginateNext').on('click', function() {
  let list = $('.pagination').find('li');
  $.each(list, function(position, element){
    if($(element).is('.active')){
      $(list[position+1]).trigger('click');
    }
  });
});


$('.jPaginateBack').on('click', function(){
  let list = $('.pagination').find('li');
  $.each(list, function(position, element){
    if($(element).is('.active')){
      $(list[position-1]).trigger('click');
    }
  });
});


