//This handles the various functions for the dashboard pages

//Libraries -->

//Commencing the app
//Dashboard page
const dashboardPage = (req, res) => {
  try {
    view = { msg: "Dashboard Page" };
    res.status(200).json({ view });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  dashboardPage,
};
