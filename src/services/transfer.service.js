import { database } from 'firebase';

class TransferService{

  getAllTransferences() {
    return database().ref('payments/paymentsList');
  }

}

export default new TransferService();