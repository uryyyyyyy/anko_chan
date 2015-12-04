package com.github.uryyyyyyy.anko_chan.api.core

import com.amazonaws.auth.EnvironmentVariableCredentialsProvider
import com.amazonaws.regions.{Region, Regions}
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient
import com.amazonaws.services.dynamodbv2.document._
import com.amazonaws.services.dynamodbv2.document.spec.QuerySpec
import com.amazonaws.services.dynamodbv2.document.utils.ValueMap
import com.amazonaws.services.lambda.runtime.Context
import com.github.uryyyyyyy.anko_chan.api.core.dto.Topic

import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import scala.collection.mutable

object Hello {
	def main(args: Array[String]): Unit = {
		println("Hello, world!")
		query().foreach(println)
	}

	def hello(list: java.util.List[Topic], context: Context) = {
		println("Hello World!!")
		val list_ :mutable.Buffer[Topic] = list
		list_.foreach(println)
		list
	}

	def query(): List[Item] ={
		val client = new AmazonDynamoDBClient(new EnvironmentVariableCredentialsProvider())
		client.setRegion(Region.getRegion(Regions.AP_NORTHEAST_1))

		val dynamoDB: DynamoDB = new DynamoDB(client)

		val table: Table = dynamoDB.getTable("mySample")

		val spec:QuerySpec = new QuerySpec()
				.withKeyConditionExpression("id = :v_id")
				.withValueMap(new ValueMap()
						.withNumber(":v_id", 1))

		val items:ItemCollection[QueryOutcome] = table.query(spec)
		items.iterator().asScala.toList
	}
}
