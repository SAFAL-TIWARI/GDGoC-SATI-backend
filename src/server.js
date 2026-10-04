import app from './app.js';
import { connectDB } from './config/db.js';
import { seedDatabase } from './seed/seedData.js';

const PORT = process.env.PORT || 5000;

// Start Server locally
const startServer = async () => {
  try {
    await connectDB();
    await seedDatabase();

    app.listen(PORT, () => {
      console.log(`===================================================`);
      console.log(`🚀 GDG on Campus SATI Backend Server Running!`);
      console.log(`📡 Port: ${PORT}`);
      console.log(`🔗 Health Check: http://localhost:${PORT}/api/health`);
      console.log(`===================================================`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
