module.exports = function(sequelize, DataTypes) {

	var VoterHistory = sequelize.define("VoterHistory", {
		voterId: DataTypes.INTEGER(9),
		electionDate: DataTypes.DATE,
		electionName: DataTypes.STRING(40),
		electionType: DataTypes.STRING(3),
		electionCategory: DataTypes.STRING(2),
		ballotType: DataTypes.STRING(2)
	});

	//join VoterHistory with AlphaVoter
	VoterHistory.associate = function(models) {
		VoterHistory.belongsTo(models.AlphaVoter {
			targetKey: "voterId"
		});
	};

	return VoterHistory;
};