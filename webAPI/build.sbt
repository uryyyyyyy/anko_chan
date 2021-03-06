
lazy val commonSettings = Seq(
	organization := "com.github.uryyyyyyy",
	version := "0.1.0",
	scalaVersion := "2.11.7"
)

lazy val core = (project in file("core")).
		settings(commonSettings: _*)

lazy val status = (project in file("status")).
		settings(commonSettings: _*).dependsOn(core % "test->test;compile->compile")
//		.settings(unmanagedSourceDirectories in Compile <++= unmanagedSourceDirectories in (core, Compile))
//		.settings(unmanagedSourceDirectories in Test <++= unmanagedSourceDirectories in (core, Test))

lazy val topic = (project in file("topic")).
		settings(commonSettings: _*).dependsOn(core % "test->test;compile->compile")
//		.settings(unmanagedSourceDirectories in Compile <++= unmanagedSourceDirectories in (core, Compile))
//		.settings(unmanagedSourceDirectories in Test <++= unmanagedSourceDirectories in (core, Test))
