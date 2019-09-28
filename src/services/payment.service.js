import { database } from 'firebase';

class PaymentService {
  createPayment(payment) {
    return database().ref('payments/paymentsList').push(payment);
  }

}

export default new PaymentService();