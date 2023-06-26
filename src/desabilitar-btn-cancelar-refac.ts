export function disableBtnCancelOrder(order) {
  return orderSuccessfullyCanceled(order) || (!isStatusApproved(order.statusPedido) && !hasAnyDeliveryApproved(order.entregas));
}

function isStatusApproved(status) {
  return status === 'Aprovado';
}

function hasAnyDeliveryApproved(delivery) {
  return (delivery || []).some(function(item) { return isStatusApproved(item.statusEntrega);});
}

function orderSuccessfullyCanceled(order) {
  return !!order.isSuccess;
}