class ClientError extends Error {
    constructor(message, statusCode = 400) {
      super(message); // Menginisialisasi pesan error
      this.statusCode = statusCode; // Menetapkan status kode, default 400
      this.name = 'ClientError'; // Menetapkan nama error
    }
  }
  
  module.exports = ClientError; // Mengekspor kelas ClientError