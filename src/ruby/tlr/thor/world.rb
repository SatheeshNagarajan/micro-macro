require 'thor'

class World < Thor
  desc 'Hello World, Welcome to tailer world'


  desc 'Bring up all the images and run the containers'
  def up
    task_start_time = DateTime.now
    puts "World up Task started at #{task_start_time}"
  end

end

World.start

