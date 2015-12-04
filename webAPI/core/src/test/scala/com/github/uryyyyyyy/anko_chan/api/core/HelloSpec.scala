package com.github.uryyyyyyy.anko_chan.api.core

import org.scalatest.{FlatSpec, Matchers}

class HelloSpec extends FlatSpec with Matchers {
	"Hello" should "have tests" in {
		true should === (true)
	}
}
