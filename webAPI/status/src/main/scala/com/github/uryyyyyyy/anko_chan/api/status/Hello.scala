package com.github.uryyyyyyy.anko_chan.api.status

import java.util

import com.amazonaws.auth.DefaultAWSCredentialsProviderChain
import com.amazonaws.regions.{Region, Regions}
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient
import com.amazonaws.services.dynamodbv2.document._
import com.amazonaws.services.dynamodbv2.model.{ScanRequest, ScanResult}
import com.amazonaws.services.lambda.runtime.Context
import com.github.uryyyyyyy.anko_chan.api.core.{Status, StatusDto}

import scala.collection.JavaConversions._
import scala.collection.mutable

object Hello {
	def main(args: Array[String]): Unit = {
		println("Hello, world!")
		getAll(null, null).foreach(v => println(v.active))
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
				.withBoolean("active", status.active)
		table.putItem(item)
	}

	def query(): List[Status] ={
		val client = new AmazonDynamoDBClient(new DefaultAWSCredentialsProviderChain())
		client.setRegion(Region.getRegion(Regions.AP_NORTHEAST_1))

		val scanRequest:ScanRequest = new ScanRequest()
				.withTableName("mySample")

		val result:ScanResult = client.scan(scanRequest)
		result.getItems.map(map => {
			println(map)
			Status(
				map.get("id").getN.toInt,
				map.get("name").getS,
				map.get("topic").getS,
				map.get("active").getBOOL
			)
		}).toList
	}

	def toDto(status: Status): StatusDto ={
		val s = new StatusDto()
		s.id = status.id
		s.name = status.name
		s.topic = status.topic
		s.active = status.active
		s
	}

	def toVO(s: StatusDto): Status ={
		Status(s.id, s.name, s.topic, s.active)
	}
}
