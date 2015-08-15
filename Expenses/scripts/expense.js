$(document).ready(function(){
	$(".add_new").on("click", function() {
		console.log("clicked")
		var rawString ="<tr>" + 
							"<td class='add_new'> + </td>"+
							"<td>Salary</td>"+
							"<td class='amout'>123000</td>"+
							"<td class='add_new'>+</td>" +
							"<td></td>"+
							"<td class='amout'></td>"+"" +
						"</tr>"
		$("tbody").append(rawString)
	});
	
	$(".amount").on("click" , function() {
		$this =  $(this);
		console.log($this);
		/*$(".span_amount").css('visibility', 'hidden');*/
		$(".span_amount").css('display', 'none');
		console.log($this.find(".input_text_box").length)
/*		if($this.find(".input_text_box").length == 0){
			$this.append("<input type='text' id='input_value_id' class='input_text_box'>");
		}	
*/		
		$this.append("<input type='text' id='input_value_id' class='input_text_box'>");
	});
	
});

