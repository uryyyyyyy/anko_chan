name := """anko_chan_core"""

libraryDependencies ++= Seq(
	"com.amazonaws" % "aws-lambda-java-core" % "1.0.0",
	"com.amazonaws" % "aws-lambda-java-events" % "1.1.0",
	"com.amazonaws" % "aws-java-sdk-dynamodb" % "1.10.38",
	"org.scalatest" %% "scalatest" % "2.2.5" % "test"
)