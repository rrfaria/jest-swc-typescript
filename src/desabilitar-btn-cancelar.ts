
export function isEnabledCancelaPedido(detailsData) {
  return !!detailsData && ((detailsData.statusPedido !== 'Aprovado' && verificaOutrosStatus(detailsData)) || !!detailsData.isSuccess);
}

export function verificaOutrosStatus(detailsData) {
  var entrega = (detailsData || {}).entregas || [];
  var retorno = true;
  entrega.forEach(function (entr) {
    if (entr.statusEntrega === 'Aprovado') {
      retorno = false;
    }
  });
  return retorno;
}