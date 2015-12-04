package com.github.uryyyyyyy.anko_chan.api.post.status

import com.amazonaws.services.lambda.runtime.Context
import com.github.uryyyyyyy.anko_chan.api.core.Topic

import scala.collection.JavaConversions._
import scala.collection.mutable

object Hello {
	def main(args: Array[String]): Unit = {
		println("Hello, world!")
	}

	def change(list: java.util.List[Topic], context: Context) = {
		println("Hello World!!")
		val list_ :mutable.Buffer[Topic] = list
		list_.foreach(println)
		list
	}
}
