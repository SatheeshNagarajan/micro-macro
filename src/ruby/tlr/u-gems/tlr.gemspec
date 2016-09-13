require 'time'

Gem::Specification.new do |s|
  s.name        = 'tlr'
  s.version     = '1.0'
  s.date        = Time.now.strftime '%Y-%m-%d'
  s.summary     = 'Cli using Thor'
  s.description = 'A simple command line interface'
  s.authors     = ['Galactica']
  s.email       = 'satheesh.nagarajan@adp.com'
  s.files       = Dir.glob('{simple-tlr}/**/*')
  s.homepage    = 'http://rubygems.org/gems/fake_page'
  s.license       = 'MIT'
end
