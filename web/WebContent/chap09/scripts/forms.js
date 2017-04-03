$(function(){
	
	
	$('.quantity input').keypress(function(event){
		if(event.which && (event.which <48 || event.which > 57)){//아스키코드로 숫자값을 의미
			event.preventDefault();
		}
	}).change(function(){
		var totalcost = 0;
		var totalquantity = 0;
		var total = 0;

		$('table tbody tr').each(function(){
			var price = parseFloat(($(this).find('.price').text().replace(/^[^\d.]/, '')));
			price = isNaN(price) ? 0 : price;  //price값이 숫자가 아니면 0, 숫자이면 숫자값
			
			var quantity = parseInt($(this).find('.quantity input').val());
			quantity = isNaN(quantity) ? 0 : quantity;
			
			
			//각 합계
			 var cost = quantity*price;
			$(this).find('.cost').text('$' + cost.toFixed(2));
			
			//총합계
			totalcost +=  cost;
			$('.subtotal> .cost').text('$' + totalcost.toFixed(2));
			
			//세금
			var tax = parseInt($('.tax> .price').text())*0.01;
			$('.tax> .cost').text('$' + (totalcost*tax).toFixed(2))
			
			//총 갯수
			totalquantity += quantity;
			$('.shipping').find('.quantity').text(totalquantity);
			
			//배송비
			$('.shipping').find('.cost').text('$'+ totalquantity*2);
			
			//총합
			total = totalcost + (totalcost*tax) + (totalquantity*2);
			$('.total').find('.cost').text('$'+total.toFixed(2));
		})
			
	
	

		
	})
		


	
	
	
})



