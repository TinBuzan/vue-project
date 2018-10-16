module.exports = (sequelize, DataTypes) => {
  const FinancialData = sequelize.define('FinancialData', {
    email: DataTypes.STRING,
    netpaycheck: DataTypes.STRING,
    netpaymonth: DataTypes.STRING,
    netspendingmonth: DataTypes.STRING,
    monthlybudget: DataTypes.STRING,
    monthlysavings: DataTypes.STRING,
    rent: DataTypes.STRING,
    electricity: DataTypes.STRING,
    autoloan: DataTypes.STRING,
    autoinsurance: DataTypes.STRING,
    studentloan: DataTypes.STRING,
    gym: DataTypes.STRING,
    phonepayment: DataTypes.STRING
  })

  // associates Financial Data to a User
  FinancialData.associate = function (models) {
    FinancialData.belongsTo(models.User)
  }

  return FinancialData
}
