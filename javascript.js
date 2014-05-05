$(document).ready(function() {
	$('.quantity').on('keyup', function() {
		var quantity = +$(this).val();
		var price = +$(this).closest('.list-items').data('price');
		$(this).find('.total').text(price * quantity);
		$('.cart-total').text('.total');
	});
});