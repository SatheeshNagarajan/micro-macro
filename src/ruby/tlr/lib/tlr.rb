#!/usr/bin/env ruby

require 'pathname'
real_path = Pathname.new(__FILE__).realpath

require 'rubygems'
require "thor"
require "thor/runner"

Thor::Util.load_thorfile(File.expand_path("../Thorfile", real_path))

