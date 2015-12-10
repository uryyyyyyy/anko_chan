package com.github.uryyyyyyy.anko_chan.api.post.status

import java.nio.ByteBuffer

import com.amazonaws.auth.DefaultAWSCredentialsProviderChain
import com.amazonaws.regions.{Regions, Region}
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient
import com.amazonaws.services.dynamodbv2.document.{Item, Table, DynamoDB}
import com.amazonaws.services.iotdata.model.PublishRequest
import com.amazonaws.services.iotdata.{AWSIotData, AWSIotDataClient}
import com.amazonaws.services.lambda.runtime.Context
import com.github.uryyyyyyy.anko_chan.api.core.Topic

import scala.collection.JavaConversions._
import scala.collection.mutable

object Hello {
	def main(args: Array[String]): Unit = {
		println("Hello, world!")
		publish()
	}

	def change(list: java.util.List[Topic], context: Context) = {
		println("Hello World!!")
		val list_ :mutable.Buffer[Topic] = list
		list_.foreach(println)
		list
	}

	def publish(): Unit ={
		val client = new AWSIotDataClient(new DefaultAWSCredentialsProviderChain())
		client.setRegion(Region.getRegion(Regions.AP_NORTHEAST_1))
		client.setEndpoint("A257KZHPUQX7EL.iot.ap-northeast-1.amazonaws.com")

		val request = new PublishRequest()
		request.setTopic("topic1")
		request.setPayload(ByteBuffer.wrap("""{"hoge" : "hoge"}""".getBytes))
		client.publish(request)
	}
}
