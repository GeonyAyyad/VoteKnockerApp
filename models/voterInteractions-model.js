module.exports = function (sequelize, DataTypes) {
	var VoterInteractions = sequelize.define("VoterInteractions", {
		knocked: DataTypes.BOOLEAN,
		litDropped: DataTypes.BOOLEAN,
		petitionSigned: DataTypes.BOOLEAN,
		surveyQ1: DataTypes.STRING(100),
		surveyQ2: DataTypes.STRING(100),
		surveyQ3: DataTypes.STRING(100),
		surveyQ4: DataTypes.STRING(100),
		surveyQ5: DataTypes.STRING(100),
		surveyQ6: DataTypes.STRING(100),
		surveyQ7: DataTypes.STRING(100),
		surveyQ8: DataTypes.STRING(100),
		surveyQ9: DataTypes.STRING(100),
		surveyQ10: DataTypes.STRING(100),
		email: DataTypes.STRING(100),
		phone: DataTypes.STRING(100)
	});

	//join Users with VoterInteractions
	VoterInteractions.associate = function (models) {
		VoterInteractions.belongsTo(models.Users);
	};

	return VoterInteractions;
};