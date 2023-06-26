
export function isEnabledCancelaPedido(detailsData) {
  return (detailsData.statusPedido !== 'Aprovado' && verificaOutrosStatus(detailsData)) || !!detailsData.isSuccess;
}

function verificaOutrosStatus(detailsData) {
  var entrega = (detailsData || {}).entregas || [];
  var retorno = true;
  entrega.forEach(function (entr) {
    if (entr.statusEntrega === 'Aprovado') {
      retorno = false;
    }
  });
  return retorno;
}