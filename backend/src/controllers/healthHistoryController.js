const HealthHistory = require('../models/HealthHistory');

// Fetch health history for a specific user
const getHealthHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const healthHistory = await HealthHistory.findAll({ where: { userId } });
    if (!healthHistory) {
      return res.status(404).json({ error: 'Health history not found' });
    }
    res.status(200).json(healthHistory);
  } catch (error) {
    console.error('Error fetching health history:', error);
    res.status(500).json({ error: 'Failed to fetch health history' });
  }
};

module.exports = { getHealthHistory };
