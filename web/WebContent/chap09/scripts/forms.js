$(function(){
	
	
	$('.quantity input').keypress(function(event){
		if(event.which && (event.which <48 || event.which > 57)){//아스키코드로 숫자값을 의미
			event.preventDefault();
		}
	}).change(function(){
		var totalcost = 0;
		var total = 0;

		$('table tbody tr').each(function(){
			var price = parseFloat(($(this).find('.price').text().replace(/^[^\d.]/, '')));
			price = isNaN(price) ? 0 : price;  //price값이 숫자가 아니면 0, 숫자이면 숫자값
			
			var quantity = parseInt($(this).find('.quantity input').val());
			quantity = isNaN(quantity) ? 0 : quantity;
			
			 var cost = quantity*price;
			$(this).find('.cost').text('$' + cost.toFixed(2));
			
			totalcost +=  cost;
			$('.subtotal> .cost').text('$' + totalcost.toFixed(2));
			
			var tax = parseInt($('.tax> .price').text())*0.01;
			$('.tax> .cost').text('$' + (totalcost*tax).toFixed(2))
			
			total += quantity;
			$('.shipping').find('.quantity').text(total);
			
			var shippingPrice = parseInt($('.shipping> .price').text());
			alert( shippingPrice);
		})
		
	
	

		
	})
		


	
	
	
})



