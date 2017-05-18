$(document).ready(function(){
  createContainer();
  createGrid();
  hoverTrail();
});

function createContainer() {
  $('body').append('<div></div>');
  $('div').addClass('container');
  $('.container').css({
    background: '#e5e5e5',
    width: '768px',
    height: '768px',
    margin: 'auto',
  });
}

function createGrid(){
  for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('.container');
            unit.css({
              background: '#666',
              height: '40px',
              width: '40px',
              margin: '4px',
              display: 'inline-block',
              float: 'left',
              opacity: '0.1',
            });
        }
  }
};

function hoverTrail(){
  $('.unit').mouseover(function(){
    $(this).fadeTo('fast',1);
  });
};

function resetGrid(){
  $('.unit').remove();
  createGrid();
  hoverTrail();
}
