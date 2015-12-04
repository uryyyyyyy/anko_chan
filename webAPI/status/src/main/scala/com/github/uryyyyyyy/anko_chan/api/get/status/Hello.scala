package com.github.uryyyyyyy.anko_chan.api.get.status

import com.amazonaws.services.lambda.runtime.Context
import com.github.uryyyyyyy.anko_chan.api.core.dto.Status

import scala.collection.JavaConversions._
import scala.collection.mutable

object Hello {
	def main(args: Array[String]): Unit = {
		println("Hello, world!")
	}

	def getAll(list: java.util.List[Status], context: Context) = {
		println("getAllStatus")
		val list_ :mutable.Buffer[Status] = list
		list_.foreach(println)
		list
	}
}
