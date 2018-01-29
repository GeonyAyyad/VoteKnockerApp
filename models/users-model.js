module.exports = function(sequelize, DataTypes) {

	var Users = sequelize.define("Users", {
		name: DataTypes.STRING(140),
		password: DataTypes.STRING(30),
		knocks: DataTypes.INTEGER,
		litDrops: DataTypes.INTEGER,
		petitionSigs: DataTypes.INTEGER,
		surveyQs: DataTypes.INTEGER,
		emails: DataTypes.INTEGER,
		phones: DataTypes.INTEGER
	});

	//join Users with VoterInteractions
	Users.associate = function(models) {
		Users.hasMany(models.VoterInteractions, {
			onDelete: "cascade"
		});

	};

	return Users;
};