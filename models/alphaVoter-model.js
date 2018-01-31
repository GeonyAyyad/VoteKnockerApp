module.exports = function(sequelize, DataTypes) {
	
	//set up table with columns
	var AlphaVoter = sequelize.define("AlphaVoter", {
		county: DataTypes.STRING(30),
		voterId: DataTypes.INTEGER(9),
		legacyId: DataTypes.INTEGER(9),
		lastName: DataTypes.STRING(40),
		firstName: DataTypes.STRING(30),
		middleName: DataTypes.STRING(30),
		suffix: DataTypes.STRING(5),
		streetNum: DataTypes.STRING(20),
		suffA: DataTypes.STRING(8),
		suffB: DataTypes.STRING(4),
		streetName: DataTypes.STRING(50),
		aptUnitNum: DataTypes.STRING(50),
		city: DataTypes.STRING(30),
		municipality: DataTypes.STRING(30),
		zip: DataTypes.INTEGER(5),
		dob: DataTypes.DATE(10),
		party: DataTypes.STRING(5),
		ward: DataTypes.INTEGER(2),
		district: DataTypes.INTEGER(2),
		status: DataTypes.STRING(30),
		congDist: DataTypes.INTEGER(4),
		legDist: DataTypes.INTEGER(4),
		freeholder: DataTypes.INTEGER(4),
		schoolDist: DataTypes.STRING(4),
		regionalSchool: DataTypes.STRING(4),
		fireDist: DataTypes.STRING(4)
	});

	//join AlphaVoter with VoterHistory and VoterInteractions
	AlphaVoter.associate = function(models) {
		AlphaVoter.hasMany(models.VoterHistory,{
			sourceKey: "voterId", 
			onDelete: "cascade"
		});
		AlphaVoter.hasMany(models.VoterInteractions,{
			onDelete: "cascade"
		});
	};

	return AlphaVoter;
};