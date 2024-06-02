const ClientError = require("../ClientError");

class InputError extends ClientError {
  constructor(message) {
    super(message); // Menginisialisasi pesan error
    this.name = 'InputError'; // Menetapkan nama error
  }
}

module.exports = InputError; // Mengekspor kelas InputError
