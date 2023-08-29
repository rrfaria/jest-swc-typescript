import { disableBtnCancelOrder } from '../src/desabilitar-btn-cancelar-refac';

describe('isEnabledCancelaPedido', () => {

  test('deve desabilitar o botão caso um cancelamento via tela tenha sido executado', () => {
    const detailsData = { isSuccess: true };
    const result = disableBtnCancelOrder(detailsData);
    expect(result).toBe(true);
  });

  test('deve habilitar o botão quando statusPedido é "Aprovado"', () => {
    const detailsData = { statusPedido: 'Aprovado', entregas:[]};
    const result = disableBtnCancelOrder(detailsData);
    expect(result).toBe(false);
  });

  test('deve habilitar o botão quando statusPedido é "Aprovado" e não for executado nenhum cancelamento via tela', () => {
    const detailsData = { statusPedido: 'Aprovado', entregas:[], isSuccess: false};
    const result = disableBtnCancelOrder(detailsData);
    expect(result).toBe(false);
  });

  test('deve desabilitar o botão quando statusPedido é "Aprovado" e for executado cancelamento via tela', () => {
    const detailsData = { statusPedido: 'Faturado', entregas:[], isSuccess: true};
    const result = disableBtnCancelOrder(detailsData);
    expect(result).toBe(true);
  });

  test('deve desabilitar o botão quando o status do pedido e nem o statusEntrega for Aprovado', () => {
    const detailsData = { statusPedido: 'Faturado', entregas: [{ statusEntrega: 'Pendente' }] };
    const result = disableBtnCancelOrder(detailsData);
    expect(result).toBe(true);
  });

  test('deve habilitar o botão quando o status do pedido ou o statusEntrega for Aprovado', () => {
    const detailsData = { statusPedido: 'Faturado', entregas: [{ statusEntrega: 'Aprovado' }] };
    const result = disableBtnCancelOrder(detailsData);
    expect(result).toBe(false);
  });

  test('deve desabilitar o botão quando o status do pedido for passado mas as entregas não forem passada', () => {
    const detailsData = { statusPedido: 'Faturado'};
    const result = disableBtnCancelOrder(detailsData);
    expect(result).toBe(true);
  });
});
