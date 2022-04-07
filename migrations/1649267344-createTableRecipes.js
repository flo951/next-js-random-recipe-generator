exports.up = async (sql) => {
  await sql`
	 CREATE TABLE recipes (
	 	id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	 	type varchar(20) NOT NULL,
		taste varchar(20) NOT NULL,
		effort varchar(20) NOT NULL,
		name varchar(20) NOT NULL,
		imageurl varchar(120) NOT NULL


		 );
`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE recipes
	`;
};
