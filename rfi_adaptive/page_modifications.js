$(document).ready(function () {
	if (typeof SPG_FORM_ADAPTIVE === 'undefined' || !SPG_FORM_ADAPTIVE) {
		  return
	}
	var tmp;
	// add dropdown list
	// month
	tmp = '<select id="sel_month" class="dropdown"><option style="display:none;"></option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option>\
		<option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option></select>'
	$('#PayForm_exp_month').before(tmp);
	// Year
	tmp = new Date().getFullYear();
	tmp = parseInt(tmp.toString().substr(2));
	tmp = '<select id="sel_year" class="dropdown"><option style="display:none;"></option><option>'+tmp+'</option><option>'+(tmp+1)+'</option><option>'+(tmp+2)+'</option><option>'+(tmp+3)+'</option>\
		<option>'+(tmp+4)+'</option><option>'+(tmp+5)+'</option><option>'+(tmp+6)+'</option><option>'+(tmp+7)+'</option><option>'+(tmp+8)+'</option><option>'+(tmp+9)+'</option></select>'
	$('#PayForm_exp_year').before(tmp);
	// hide select
	$('.dropdown').fadeTo(0,0).css('cursor', 'pointer');

	// events
	$('#sel_month').on('change focusout', function(){
		$('#PayForm_exp_month').val($(this).find(':selected').text()).focus();
		$('#sel_year').focus();
	});

	$('#sel_year').on('change focusout', function(){
		$('#PayForm_exp_year').val($(this).find(':selected').text()).focus();
		$('#PayForm_card_holder').focus();
	});

});
