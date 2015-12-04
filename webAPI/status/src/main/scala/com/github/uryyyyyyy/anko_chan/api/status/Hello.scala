package com.github.uryyyyyyy.anko_chan.api.status

import com.amazonaws.auth.DefaultAWSCredentialsProviderChain
import com.amazonaws.regions.{Region, Regions}
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient
import com.amazonaws.services.dynamodbv2.document._
import com.amazonaws.services.dynamodbv2.document.spec.QuerySpec
import com.amazonaws.services.dynamodbv2.document.utils.ValueMap
import com.amazonaws.services.lambda.runtime.Context
import com.github.uryyyyyyy.anko_chan.api.core.StatusDto
import com.github.uryyyyyyy.anko_chan.api.core.objects.Status

import scala.collection.JavaConverters._
import scala.collection.JavaConversions._
import scala.collection.mutable
import java.util

object Hello {
	def main(args: Array[String]): Unit = {
		println("Hello, world!")
		val s = Status(1, "name1", "topic1")
		put(s)
	}

	def getAll(ignore: Object, context: Context) = {
		println("getAllStatus")
		val ss: mutable.Buffer[StatusDto] = query().map(toDto).toBuffer
		val list :util.List[StatusDto] = ss
		list
	}

	def changeStatus(status: StatusDto, context: Context) = {
		println("getAllStatus")
		val s = toVO(status)
		put(s)
	}

	def put(status: Status): Unit ={
		val client = new AmazonDynamoDBClient(new DefaultAWSCredentialsProviderChain())
		client.setRegion(Region.getRegion(Regions.AP_NORTHEAST_1))

		val dynamoDB: DynamoDB = new DynamoDB(client)

		val table: Table = dynamoDB.getTable("mySample")

		val item: Item = new Item()
				.withPrimaryKey("id", status.id)
				.withString("name", status.name)
				.withString("topic", status.topic)
		table.putItem(item)
	}

	def query(): List[Status] ={
		val client = new AmazonDynamoDBClient(new DefaultAWSCredentialsProviderChain())
		client.setRegion(Region.getRegion(Regions.AP_NORTHEAST_1))

		val dynamoDB: DynamoDB = new DynamoDB(client)

		val table: Table = dynamoDB.getTable("mySample")

		val spec:QuerySpec = new QuerySpec()
				.withKeyConditionExpression("id > -1")

		val items:ItemCollection[QueryOutcome] = table.query(spec)
		items.iterator().asScala.toList.map(v => Status(v.getInt("id"), v.getString("name"), v.getString("topic")))
	}

	def toDto(status: Status): StatusDto ={
		val s = new StatusDto()
		s.id = status.id
		s.name = status.name
		s.topic = status.topic
		s
	}

	def toVO(s: StatusDto): Status ={
		Status(s.id, s.name, s.topic)
	}
}
